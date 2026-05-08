// ── Module data ───────────────────────────────────────────────────────────────

const MODULES = {
  accounts: {
    id: "accounts",
    label: "Accounts",
    system: "Zoho CRM",
    color: "blue",
    desc: "Primary customer account records, each identified by an ADD account number. The account is the entry point for all service activity — techs start here before creating any work order.",
    stories: [
      "Account manager creates a new account in Zoho once — no separate entry in ADDS required",
      "Tech looks up a customer by ADD account number before starting a job",
      "Tech creates a WO from the account widget",
      "Account data (name, address, account number) pre-fills the new work order",
      "Manager reviews a customer's full work order history from the account record",
    ],
    connections: [
      { target: "workorders",     dir: "out", label: "Work Orders",       desc: "WO created from the account widget" },
      { target: "adds",           dir: "ref", label: "ADDS",              desc: "ADD account number links records cross-system", edgeId: "e-accounts-adds" },
      { target: "contacts",           dir: "in", label: "Contacts",              desc: "Contacts/Locations created from Accounts view related list" },
    ],
    impl: "Standard Zoho CRM Accounts module with a custom 'ADD Account Number' field. This field is the foreign key for all ADDS integrations. The Zoho CRM account widget on the Work Orders module surfaces account lookup and pre-populates WO fields on creation.",
  },

  workorders: {
    id: "workorders",
    label: "Work Orders",
    system: "Zoho CRM (Custom Module)",
    color: "teal",
    desc: "Custom Zoho CRM module for field service. Created from the Accounts widget with basic data and the ADD confirmation number. Techs add parts, labor, and a customer signature on-site, then submit — which triggers invoice creation in Inventory and pushes billing data to ADDS.",
    stories: [
      "Tech creates a WO from the account widget — basic data and ADD confirmation number auto-populate",
      "Tech selects parts and records labor as line items while on-site",
      "Customer signs the completed work order on the tech's device",
      "On submission, a Zoho Inventory invoice is auto-generated from the WO",
      "Completed WO details (line items, labor, signature) are pushed to ADDS for billing",
    ],
    connections: [
      { target: "accounts",       dir: "in",  label: "Accounts",          desc: "Created from the account widget" },
      { target: "inventoryitems", dir: "in",  label: "Inventory Items",   desc: "Parts catalog populates line items" },
      { target: "invoices",       dir: "out", label: "Inventory Invoices",desc: "Submitted as an invoice on completion" },
      { target: "adds",           dir: "out", label: "ADDS",              desc: "Completion data pushed for billing" },
    ],
    impl: "Custom module in Zoho CRM. A Deluge script fires on status change to 'Submitted': creates the invoice in Zoho Inventory via API, then posts line items, labor, signature reference, and ADD confirmation number to the ADDS API. Signature captured via custom canvas widget embedded in the module.",
  },
  
  contacts: {
    id: "contacts",
    label: "Contacts/Locations",
    system: "Zoho CRM",
    color: "teal",
    desc: "Contacts Module used to normalize multi-location account data. Each Contact record represents an Account's location",
    stories: [
      "Account Manager can manage individual, separate locations for a given account"
    ],
    connections: [
      { target: "accounts",       dir: "in",  label: "Accounts",          desc: "Created from the Accounts module" },
    ],
    impl: "The out of box features of the Contacts module will serve us well. The only to-do is to rename the Contacts module to 'Locations.' Lookup field in the Contacts module will link each location to an Account.",
  },

  inventoryitems: {
    id: "inventoryitems",
    label: "Inventory Items",
    system: "Zoho Inventory",
    color: "green",
    desc: "Source of truth for all parts and materials. Zoho Inventory is the master catalog — any new items added here must also be reflected in ADDS to keep the billing catalog aligned. Mobile warehouses (trucks) are modeled as warehouse locations.",
    stories: [
      "Warehouse manager adds a new part to Zoho Inventory",
      "New part is automatically synced to the ADDS item catalog",
      "Techs select parts from this catalog when filling out work order line items",
      "Stock levels decrease automatically as invoices are processed against truck warehouses",
      "Manager checks per-truck inventory levels via Inventory reports",
      "Techs perform stock counts. When those stock counts are approved, the item inventory stock is adjusted."
    ],
    connections: [
      { target: "workorders",     dir: "out", label: "Work Orders",       desc: "Provides the parts catalog for line items" },
      { target: "adds",           dir: "out", label: "ADDS",              desc: "New or updated items synced to ADD catalog" },
      { target: "invoices",       dir: "in",  label: "Inventory Invoices",desc: "Invoices deduct stock from the truck warehouse" },
    ],
    impl: "Zoho Inventory Items is the master record. A Zoho Catalyst webhook fires on item create/update and calls the ADDS SOAP API to register or update the item. Truck warehouses are Zoho Inventory warehouse locations, so stock per vehicle is tracked natively.",
  },

  invoices: {
    id: "invoices",
    label: "Inventory Invoices",
    system: "Zoho Inventory",
    color: "amber",
    desc: "Generated automatically when a work order is submitted. Each invoice documents which parts left which truck, enabling mobile warehouse stock audits and providing a clear audit trail of parts dispensed per customer job.",
    stories: [
      "Invoice is auto-created the moment a tech submits a completed work order",
      "Invoice line items match the WO parts and labor entries exactly",
      "Manager runs a stock report to see what each truck is currently carrying",
      "Invoices serve as the audit trail for parts dispensed per customer job",
      "Finance reviews invoice totals to reconcile parts costs against revenue",
    ],
    connections: [
      { target: "workorders",     dir: "in",  label: "Work Orders",       desc: "Invoice triggered by WO submission" },
      { target: "inventoryitems", dir: "out", label: "Inventory Items",   desc: "Deducts stock from the truck's warehouse location" },
    ],
    impl: "Zoho Inventory invoices are created via the Zoho Inventory API, called from the same automation that handles WO submission. Each invoice is assigned to the submitting tech's truck as a warehouse location. Zoho Inventory's built-in reports provide per-vehicle stock levels and movement history without custom reporting.",
  },

  adds: {
    id: "adds",
    label: "ADDS",
    system: "Legacy (ADD + Pegasus)",
    color: "red",
    desc: "Legacy billing and dispatch system — ADD handles invoicing, Pegasus handles dispatch. Required to remain in the loop for the existing billing workflow. Zoho is the operational source of truth; ADDS consumes completed data for billing. The integration is intentionally push-only to minimize disruption to the legacy process.",
    stories: [
      "Account manager creates a new account in Zoho — it appears in ADDS automatically, no double entry",
      "Account updates and deletions in Zoho are reflected in ADDS without any manual re-entry",
      "Billing team processes completed jobs in ADD using work order data pushed from Zoho automatically",
      "Dispatch continues running through Pegasus — no change to that workflow",
      "New parts added in Zoho Inventory automatically appear in ADD's billing catalog",
    ],
    connections: [
      { target: "accounts",       dir: "in",  label: "Accounts",          desc: "Account create/update/delete synced from Zoho" },
      { target: "workorders",     dir: "in",  label: "Work Orders",       desc: "Receives completion data for billing" },
      { target: "inventoryitems", dir: "in",  label: "Inventory Items",   desc: "Receives new item catalog entries" },
    ],
    impl: "Zoho CRM is the source of truth for all account data. Account managers create and manage accounts in Zoho only — ADDS receives that data automatically via sync, eliminating double entry. Zoho Catalyst triggers a ADDS SOAP API call on account create, update, and delete, keeping both systems in sync. The same push-only pattern applies to inventory item changes. Work Order sync may be push-only, but also could include a 'pull' to backsync when the Work Order has been successfully billed in ADDS. Pegasus dispatch is out of scope for phase 1.",
  },
};

// ── Edges ─────────────────────────────────────────────────────────────────────

const EDGES = [
  { from: "accounts",       to: "workorders",     type: "flow", label: "triggers creation" },
  { from: "workorders",     to: "invoices",        type: "flow", label: "submitted as invoice" },
  { from: "workorders",     to: "adds",            type: "sync", label: "completion data" },
  { from: "inventoryitems", to: "workorders",      type: "flow", label: "parts catalog" },
  { from: "inventoryitems", to: "adds",            type: "sync", label: "item sync" },
  {
    id: "e-accounts-adds",
    from: "accounts", to: "adds", type: "sync", label: "account sync",
    detail: {
      title: "Account Sync — Accounts → ADDS",
      sections: [
        {
          heading: "Sync Pattern",
          body: `Zoho CRM is the source of truth for all customer accounts. A CRM workflow fires on Account create and Account update, calling the ADDS SOAP API to keep the two systems in sync. On create, the ADD-assigned account number is written back to the CRM record so it's available for all future work orders and integrations. On update, that stored number is used to target the correct ADDS record. Every call must include the full customer master field set — not just changed fields.`,
        },
        {
          heading: "Create Flow — AddCustMaster",
          trigger: "CRM workflow on Account record creation",
          steps: [
            ["GetCustMasterFields(p_iCompanyID)", "retrieve the required dataset structure"],
            ["map fields", "populate the dataset with CRM Account field values"],
            ["AddCustMaster(p_iCompanyID, p_sSysUser, p_oRSMasterFields)", "create the ADDS customer record"],
            ["on success (p_lErrorCode = 0)", "write returned p_lAccountNum back to the CRM Account's ADD Account Number field — this becomes the foreign key for all future ADDS interactions"],
          ],
        },
        {
          heading: "Update Flow — UpdateCustMaster",
          trigger: "CRM workflow on Account record update",
          steps: [
            ["read ADD Account Number", "retrieve the stored account number from the CRM record"],
            ["GetCustMasterFields(p_iCompanyID)", "get the full required field structure"],
            ["map fields", "populate dataset with current CRM values (all fields, not just changed ones)"],
            ["UpdateCustMaster(p_iCompanyID, p_lAccountNum, p_sSysUser, p_oRSMasterFields)", "apply the update in ADDS"],
          ],
        },
        {
          heading: "Delivery Locations — Tanks",
          body: "Tanks in ADDS represent customer delivery locations. In Zoho CRM these map to the Contacts/Locations module — one Location record per tank/delivery site. A separate CRM workflow on Location create/update calls GetTankFields() then AddTank() or UpdateTank(). These same Location records also sync to Zoho Inventory as warehouse locations, enabling per-location stock tracking for mobile delivery routes.",
        },
        {
          heading: "⚠ Full Field Dataset Required",
          body: "ADDS requires every field returned by GetCustMasterFields() to be present on every Add or Update call — not just changed fields. Always call the GetCustMasterFields() method first to retrieve the complete structure, populate it with current CRM values, apply changes, then call AddCustMaster() or UpdateCustMaster().",
        },
      ],
    },
  },
  { from: "contacts", to: "accounts", type: "flow", label: "contact lookup to accounts module" },
];

// Lookup map for edges with explicit IDs
const EDGE_MAP = {};
EDGES.forEach((edge, i) => { EDGE_MAP[edge.id || `e${i}`] = edge; });

// ── Node layout ───────────────────────────────────────────────────────────────

const NW = 168, NH = 50, NRX = 8;

const NODE_POS = {
  adds:           { x: 380,  y: 40  },
  contacts:       { x: 140,  y: 200 },
  accounts:       { x: 380,  y: 200 },
  workorders:     { x: 620,  y: 200 },
  inventoryitems: { x: 195,  y: 375 },
  invoices:       { x: 565,  y: 375 },
};

const PARENT_MAP = {
  adds:           "group-adds",
  accounts:       "group-crm",
  workorders:     "group-crm",
  contacts:       "group-crm",
  inventoryitems: "group-inventory",
  invoices:       "group-inventory",
};

const GROUPS = [
  { id: "group-adds",      label: "ADDS  ·  Legacy System", color: "red"   },
  { id: "group-crm",       label: "Zoho CRM",               color: "teal"  },
  { id: "group-inventory", label: "Zoho Inventory",         color: "green" },
];

// ── Color helpers ─────────────────────────────────────────────────────────────

const COLOR_MAP = {
  blue:  { fill: "--blue-fill",  stroke: "--blue-stroke",  text: "--blue-text"  },
  teal:  { fill: "--teal-fill",  stroke: "--teal-stroke",  text: "--teal-text"  },
  green: { fill: "--green-fill", stroke: "--green-stroke", text: "--green-text" },
  amber: { fill: "--amber-fill", stroke: "--amber-stroke", text: "--amber-text" },
  red:   { fill: "--red-fill",   stroke: "--red-stroke",   text: "--red-text"   },
};

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function nodeColors(colorKey) {
  const m = COLOR_MAP[colorKey];
  return { fill: cssVar(m.fill), stroke: cssVar(m.stroke), text: cssVar(m.text) };
}

// ── Cytoscape ─────────────────────────────────────────────────────────────────

let cy = null;

function buildElements() {
  const els = [];

  for (const g of GROUPS) {
    const c = nodeColors(g.color);
    els.push({
      group: "nodes",
      data: { id: g.id, label: g.label, stroke: c.stroke, fill: c.fill, textColor: c.text },
      classes: `group group-${g.color}`,
    });
  }

  for (const mod of Object.values(MODULES)) {
    const c = nodeColors(mod.color);
    const pos = NODE_POS[mod.id];
    els.push({
      group: "nodes",
      data: {
        id: mod.id, label: mod.label,
        fill: c.fill, stroke: c.stroke, textColor: c.text,
        parent: PARENT_MAP[mod.id],
      },
      position: { x: pos.x, y: pos.y + NH / 2 },
      locked: true,
      classes: mod.color,
    });
  }

  EDGES.forEach((edge, i) => {
    els.push({
      group: "edges",
      data: { id: edge.id || `e${i}`, source: edge.from, target: edge.to, label: edge.label || "" },
      classes: edge.type + (edge.detail ? " has-detail" : ""),
    });
  });

  return els;
}

function buildStyle() {
  const muted = cssVar("--text-muted");
  const flowColor = "#4b5563";
  const syncColor = "#374151";

  return [
    {
      selector: "node",
      style: {
        width: NW, height: NH,
        shape: "round-rectangle",
        "corner-radius": NRX,
        "background-color": "data(fill)",
        "border-color": "data(stroke)",
        "border-width": 1.5,
        label: "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        "font-size": "12px",
        "font-weight": "600",
        color: "data(textColor)",
        "text-wrap": "wrap",
        "text-max-width": NW - 16,
        cursor: "pointer",
        "transition-property": "opacity",
        "transition-duration": "150ms",
      }
    },
    {
      selector: "node.dimmed",
      style: { opacity: 0.25 }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        "control-point-step-size": 30,
        "target-arrow-shape": "triangle",
        "target-arrow-fill": "filled",
        "arrow-scale": 0.75,
        "line-color": flowColor,
        "target-arrow-color": flowColor,
        width: 1.5,
        opacity: 0.8,
        "transition-property": "opacity",
        "transition-duration": "150ms",
      }
    },
    {
      selector: "edge.sync",
      style: {
        "line-color": syncColor,
        "target-arrow-color": syncColor,
        "line-style": "dashed",
        "line-dash-pattern": [5, 3],
        width: 1,
        opacity: 0.6,
      }
    },
    {
      selector: "edge.dimmed",
      style: { opacity: 0.08 }
    },
    {
      selector: "edge.selected",
      style: {
        "line-color": "#9ca3af",
        "target-arrow-color": "#9ca3af",
        width: 2.5,
        opacity: 1,
      }
    },
    {
      selector: "edge.has-detail",
      style: { cursor: "pointer" }
    },
    {
      selector: "node.group",
      style: {
        "background-color": "data(fill)",
        "background-opacity": 0.35,
        "border-color": "data(stroke)",
        "border-width": 1.5,
        "border-opacity": 0.5,
        label: "data(label)",
        "text-valign": "top",
        "text-halign": "center",
        "font-size": "10px",
        "font-weight": "700",
        color: "data(textColor)",
        "text-margin-y": 14,
        padding: "28px",
        "compound-sizing-wrt-labels": "exclude",
        "z-index": 0,
      }
    },
    {
      selector: "node.group.dimmed",
      style: { opacity: 1 }
    },
  ];
}

function initCytoscape() {
  cy = cytoscape({
    container: document.getElementById("cy"),
    elements: buildElements(),
    style: buildStyle(),
    layout: { name: "preset" },
    userZoomingEnabled: false,
    userPanningEnabled: false,
    autoungrabify: true,
  });

  cy.fit(undefined, 28);

  new ResizeObserver(() => { if (cy) cy.fit(undefined, 28); })
    .observe(document.getElementById("cy"));

  cy.on("tap", "node", e => {
    if (e.target.hasClass("group")) return;
    handleNodeClick(e.target.id());
  });

  cy.on("tap", "edge", e => {
    e.stopPropagation();
    const id = e.target.id();
    const edgeData = EDGE_MAP[id];
    if (edgeData && edgeData.detail) {
      selectEdge(id);
    } else {
      const label = e.target.data("label");
      if (!label) return;
      const pos = e.renderedPosition;
      const rect = document.getElementById("cy").getBoundingClientRect();
      showEdgeTooltip(label, rect.left + pos.x, rect.top + pos.y);
    }
  });

  cy.on("tap", e => {
    if (e.target === cy) { deselect(); hideEdgeTooltip(); }
  });
}

// ── Edge tooltip ──────────────────────────────────────────────────────────────

function showEdgeTooltip(label, x, y) {
  const tip = document.getElementById("edge-tooltip");
  tip.textContent = label;
  tip.style.display = "block";
  tip.style.left = `${x}px`;
  tip.style.top  = `${y}px`;
}

function hideEdgeTooltip() {
  document.getElementById("edge-tooltip").style.display = "none";
}

document.addEventListener("click", hideEdgeTooltip);

// ── Interaction ───────────────────────────────────────────────────────────────

let activeNode = null;
let activeEdge = null;

function handleNodeClick(id) {
  if (activeNode === id) { deselect(); return; }
  select(id);
}

function select(id) {
  activeNode = id;
  activeEdge = null;
  hideEdgeTooltip();

  cy.edges().removeClass("selected");
  cy.elements().addClass("dimmed");
  cy.nodes(".group").removeClass("dimmed");
  const node = cy.getElementById(id);
  node.removeClass("dimmed");
  node.connectedEdges().removeClass("dimmed");
  node.connectedEdges().connectedNodes().removeClass("dimmed");

  const panel = document.getElementById("detail-panel");
  panel.classList.remove("edge-mode");
  renderPanel(MODULES[id]);
  panel.classList.add("visible");
}

function selectEdge(id) {
  if (activeEdge === id) { deselect(); return; }
  activeNode = null;
  activeEdge = id;
  hideEdgeTooltip();

  cy.edges().removeClass("selected");
  cy.elements().addClass("dimmed");
  cy.nodes(".group").removeClass("dimmed");
  const edge = cy.getElementById(id);
  edge.removeClass("dimmed");
  edge.addClass("selected");
  edge.source().removeClass("dimmed");
  edge.target().removeClass("dimmed");

  const panel = document.getElementById("detail-panel");
  panel.classList.add("edge-mode");
  renderEdgePanel(EDGE_MAP[id]);
  panel.classList.add("visible");
}

function deselect() {
  activeNode = null;
  activeEdge = null;
  cy.edges().removeClass("selected");
  cy.elements().removeClass("dimmed");
  const panel = document.getElementById("detail-panel");
  panel.classList.remove("visible");
  panel.classList.remove("edge-mode");
}

// ── Panel ─────────────────────────────────────────────────────────────────────

const DIR_LABEL = { out: "→", in: "←", ref: "⇌" };

function renderPanel(mod) {
  const colors = nodeColors(mod.color);
  const panel = document.getElementById("detail-panel");

  const nameEl = panel.querySelector(".panel-module-name");
  nameEl.textContent = mod.label;
  nameEl.style.color = colors.stroke;

  panel.querySelector(".panel-system-badge").textContent = mod.system;
  panel.querySelector(".panel-desc").textContent = mod.desc;

  panel.querySelector(".panel-body").innerHTML = `
    <div class="panel-cell">
      <div class="cell-title">User Stories</div>
      <ul class="stories-list"></ul>
    </div>
    <div class="panel-cell">
      <div class="cell-title">Connections</div>
      <div class="connections-list"></div>
    </div>
    <div class="panel-cell">
      <div class="cell-title">Implementation</div>
      <div class="impl-text"></div>
    </div>
  `;

  panel.querySelector(".stories-list").innerHTML =
    mod.stories.map(s => `<li>${s}</li>`).join("");

  panel.querySelector(".connections-list").innerHTML =
    mod.connections.map(c => {
      const target = MODULES[c.target];
      const tc = nodeColors(target.color);
      const edgeAttr = c.edgeId ? ` data-edge-id="${c.edgeId}"` : "";
      const detailHint = c.edgeId ? ` <span class="conn-detail-hint">↗ details</span>` : "";
      return `<div class="conn-badge" data-target="${c.target}"${edgeAttr}>
        <span class="conn-name" style="color:${tc.stroke}">
          <span class="conn-dir">${DIR_LABEL[c.dir]}</span> ${target.label}${detailHint}
        </span>
        <span class="conn-desc">${c.desc}</span>
      </div>`;
    }).join("");

  panel.querySelectorAll(".conn-badge").forEach(el => {
    el.addEventListener("click", () => {
      if (el.dataset.edgeId) selectEdge(el.dataset.edgeId);
      else select(el.dataset.target);
    });
  });

  panel.querySelector(".impl-text").textContent = mod.impl;
}

function renderEdgePanel(edge) {
  const panel = document.getElementById("detail-panel");
  const d = edge.detail;

  const nameEl = panel.querySelector(".panel-module-name");
  nameEl.textContent = d.title;
  nameEl.style.color = cssVar("--text-muted");

  panel.querySelector(".panel-system-badge").textContent = "Integration";
  panel.querySelector(".panel-desc").textContent =
    `${MODULES[edge.from].label} → ${MODULES[edge.to].label}`;

  panel.querySelector(".panel-body").innerHTML = d.sections.map(s => {
    let content = "";
    if (s.trigger) content += `<p class="edge-trigger">Trigger: ${s.trigger}</p>`;
    if (s.steps)   content += `<ul>${s.steps.map(([fn, desc]) => `<li><code>${fn}</code> — ${desc}</li>`).join("")}</ul>`;
    if (s.body)    content += `<p>${s.body}</p>`;
    return `<div class="panel-cell edge-section"><div class="cell-title">${s.heading}</div><div class="impl-text">${content}</div></div>`;
  }).join("");
}

// ── Auth ──────────────────────────────────────────────────────────────────────
// To change the password: replace PASS_ENCODED with btoa("yournewpassword")

const PASS_ENCODED = "dW1lMjAyNQ=="; // ume2025

function checkAuth() {
  return sessionStorage.getItem("auth") === PASS_ENCODED;
}

// ── Boot ──────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  if (checkAuth()) {
    showApp();
    return;
  }

  document.getElementById("login").style.display = "flex";

  document.getElementById("login-form").addEventListener("submit", e => {
    e.preventDefault();
    const val = document.getElementById("login-input").value;
    if (btoa(val) === PASS_ENCODED) {
      sessionStorage.setItem("auth", PASS_ENCODED);
      document.getElementById("login").style.display = "none";
      showApp();
    } else {
      const err = document.getElementById("login-error");
      err.textContent = "Incorrect password.";
      document.getElementById("login-input").value = "";
      document.getElementById("login-input").focus();
    }
  });
});

function showApp() {
  document.getElementById("app").style.display = "block";
  initCytoscape();
}
