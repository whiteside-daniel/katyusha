import React, {useState, useEffect, useRef} from 'react';
import { Chart, ScatterController, LinearScale, PointElement, Tooltip } from 'chart.js';
import './portfolio.css';

Chart.register(ScatterController, LinearScale, PointElement, Tooltip);

const Portfolio = (props) => {

    const [showDemoModal, setShowDemoModal] = useState(false);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('/business-plans/plans.json')
            .then(r => r.json())
            .then(setPlans)
            .catch(() => {});
    }, []);

    switch(props.page) {
        
//home page
        case 'home':
            return(
                <div className="home-container" id="homepage-container">
                    <div className="home-slide">
                        <div className="slide-caption">
                            <div id="quote">
                                <p>
                                    The most durable technology emerges when technical capability is guided by a genuine understanding of human needs.
                                </p>
                            </div>
                            <p>
                                Early in my career I became curious not only about how the world works, but how people work. I invested heavily in understanding human psychology, communication, and systems thinking — and those disciplines now inform everything I build and every team I work with.
                            </p>
                            <p>
                                I work with businesses and entrepreneurs on software, systems, and the human side of getting things built.
                            </p>
                            <p>
                                See what I've been thinking on <a href="https://creatrcollective.substack.com" target="_blank" rel="noreferrer">Substack</a>, and see my professional services at <a href="https://creatrcollective.net" target="_blank" rel="noreferrer">CreatrCollective</a>.
                            </p>
                        </div>
                    </div>

                    <div id="home-contact">
                        <p>Get in touch</p>
                        <p>daniel@creatrcollective.net</p>
                        <p>
                            <a href="media/daniel-whiteside-resume.pdf" target="_blank">Resume</a>
                        </p>
                    </div>
                    <div id="cc-notice">
                        <p>
                            Anti-copyright notice: steal this. Use it. Make money from it. I don't care — just tell people where it came from.{' '}
                            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
                        </p>
                    </div>
                </div>
            );
// project page

        case 'projects':
            return(
                <div id="portfolio-element">

                    {showDemoModal && (
                        <div id="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
                            <div id="demo-modal" onClick={e => e.stopPropagation()}>
                                <h4>Wharfinger Demo Access</h4>
                                <p>Log in with the demo account to explore the app:</p>
                                <code>
                                    <p>Email: jake@zephyr.com</p>
                                    <p>Password: password123</p>
                                </code>
                                <div id="demo-modal-buttons">
                                    <a href="https://staging.wharfinger.app/login" target="_blank" rel="noreferrer" onClick={() => setShowDemoModal(false)}>Go to Wharfinger →</a>
                                    <button onClick={() => setShowDemoModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flexbox-container">
                        <div className="flexbox-title">
                            <h3 align="center">Products</h3>
                        </div>
                    </div>

                    <div className="flexbox-container">
                        <div className="flexbox-item" id="wharfinger-featured">
                            <div className="projects-container">
                                <img src="wharfinger-logo.svg" alt="Wharfinger" id="wharfinger-logo" />
                                <h3>Wharfinger</h3>
                                <p>
                                    A multi-tenant asset management platform built for field operations. Tracks serialized and bulk inventory across locations, manages work orders, and syncs bidirectionally with Zoho Inventory, Zoho FSM, and Peplink IC2.
                                </p>
                                <p>
                                    Built with Vue 3, Express.js, and PostgreSQL. Features role-based access control, offline PWA support with an IndexedDB mutation queue, AES-256-GCM credential encryption, TOTP 2FA, and background sync workers running on Docker.
                                </p>
                                <button className="demo-link-btn" onClick={() => setShowDemoModal(true)}>Try the demo →</button>
                            </div>
                        </div>
                    </div>

                    <div className="flexbox-container">
                        <div className="flexbox-title">
                            <h3 align="center">Experiments</h3>
                        </div>
                    </div>

                    <div className="flexbox-container">
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Polity Phase Map</h3>
                                <img id="polity-graph-img" src="media/polity-map.png" alt="polity-graph" width="90%" />
                                <p>
                                    An interactive political analysis framework built as a standalone JavaScript application. Moving beyond linear "cycle of democracy" models like Tytler's, it maps political development as a directed graph of ten states. <a href="political-map/polity-phase-map.html" target="_blank">Open Polity Phase Map</a>
                                </p>
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Retirement Calculator</h3>
                                <img id="retirement-img" src="media/retirement-calc.png" alt="retirement" width="90%" />
                                <p>An interactive retirement savings calculator. Enter your current savings, contributions, and expected returns to project growth and see how long your nest egg will last. Built with Chart.js and MathJax. <a href="retirement-calculator/index.html" target="_blank">Open Calculator</a></p>
                            </div>
                        </div>
                    </div>

                    <div id="cc-notice">
                        <p>
                            Anti-copyright notice: steal this. Use it. Make money from it. I don't care — just tell people where it came from.{' '}
                            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
                        </p>
                    </div>
                </div>
            );
// business ideas page
        case 'business-ideas':
            return <BusinessIdeasPage plans={plans} />;

        default: return(<div>No content loaded yet. Try refreshing the page.</div>);
    }
}

function BusinessIdeasPage({ plans }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [showLabels, setShowLabels] = useState(false);

    useEffect(() => {
        if (!chartRef.current || plans.length === 0) return;

        if (chartInstance.current) chartInstance.current.destroy();

        const labelPlugin = {
            id: 'labelPlugin',
            afterDatasetsDraw(chart) {
                if (!showLabels) return;
                const ctx = chart.ctx;
                chart.data.datasets[0].data.forEach((point, i) => {
                    const meta = chart.getDatasetMeta(0);
                    const el = meta.data[i];
                    ctx.fillStyle = '#4bd6d6';
                    ctx.font = '11px IBM Plex Mono, monospace';
                    ctx.fillText(plans[i].title, el.x + 8, el.y - 6);
                });
            }
        };

        chartInstance.current = new Chart(chartRef.current, {
            type: 'scatter',
            plugins: [labelPlugin],
            data: {
                datasets: [{
                    data: plans.map(p => ({ x: p.feasibility, y: p.profitability })),
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    backgroundColor: 'rgba(75, 214, 214, 0.7)',
                    borderColor: 'rgba(75, 214, 214, 1)',
                }]
            },
            options: {
                scales: {
                    x: {
                        min: 0, max: 10,
                        title: { display: true, text: 'Feasibility', color: '#4bd6d6' },
                        ticks: { color: '#4bd6d6' },
                        grid: { color: 'rgba(75,214,214,0.15)' },
                        border: { color: '#4bd6d6' },
                    },
                    y: {
                        min: 0, max: 10,
                        title: { display: true, text: 'Profitability', color: '#4bd6d6' },
                        ticks: { color: '#4bd6d6' },
                        grid: { color: 'rgba(75,214,214,0.15)' },
                        border: { color: '#4bd6d6' },
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => {
                                const p = plans[ctx.dataIndex];
                                return `${p.title}  (F: ${p.feasibility}, P: ${p.profitability})`;
                            }
                        }
                    }
                }
            }
        });

        return () => chartInstance.current?.destroy();
    }, [plans, showLabels]);

    return (
        <div id="portfolio-element">
            <div className="flexbox-container">
                <div className="flexbox-title">
                    <h3 align="center">Proposals &amp; Business Ideas</h3>
                    <p className="section-description">These are business concepts I've developed and believe in — but don't yet have collaborators. If you'd like to contribute to one of these projects, please contact me.</p>
                </div>
            </div>

            <div className="flexbox-container">
                {plans.map(plan => (
                    <div className="flexbox-item" key={plan.id}>
                        <div className="projects-container">
                            <p className="plan-industry">{plan.industry}</p>
                            <h3>{plan.title}</h3>
                            <p>{plan.description}</p>
                            <a href={`business-plans/${plan.file}`} target="_blank" rel="noreferrer" className="plan-link">View proposal →</a>
                        </div>
                    </div>
                ))}
            </div>

            <div id="ideas-chart-container">
                <h4>Feasibility vs. Profitability</h4>
                <canvas ref={chartRef} />
                <label id="chart-label-toggle">
                    <input
                        type="checkbox"
                        checked={showLabels}
                        onChange={e => setShowLabels(e.target.checked)}
                    />
                    {' '}show labels
                </label>
            </div>

            <div id="cc-notice">
                <p>
                    Anti-copyright notice: steal this. Use it. Make money from it. I don't care — just tell people where it came from.{' '}
                    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
                </p>
            </div>
        </div>
    );
}

export default Portfolio;