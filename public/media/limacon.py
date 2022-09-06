#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug 28 15:15:24 2019

@author: Daniel
"""

import matplotlib.pyplot as plt
import numpy as np

#create coordinates and matrix for the blue circle

t = np.arange(-2*np.pi,2*np.pi,np.pi/45)
x = 9*np.cos(t)
y = 9*np.sin(t)

#plot the blue circle first
plt.plot(x,y, color=(0.2,0.2,1))


#choose ray color: 0,0,0 is black, and .15 is alpha/transparency
rayColor=(0,0,0,.15)

#point where the rays are emitted from
point = [15,0]

#plot the rays
for i in range(0,len(t)):
    tempx = [point[0],x[i]]
    tempy = [point[1],y[i]]
    plt.plot(tempx,tempy, color=rayColor)
    slopeCircle = (-1*x[i]/y[i])
    slopeLine = (point[1]-y[i])/(point[0]-x[i])
    theta = np.arccos((1+slopeLine*slopeCircle)/(np.sqrt(1+slopeLine**2)*np.sqrt(1+slopeCircle**2)))
    if (theta > (np.pi/2)):
        theta = theta - (np.pi/2)
    if (slopeCircle <= 0):
        if (slopeLine >= 0):
            newSlope = np.tan(np.arctan(slopeCircle) + np.pi - theta)
            if ((np.arctan(slopeCircle) + np.pi - theta) >= np.pi/2):
                ntempx = [x[i], x[i] - 20]
                ntempy = [y[i], y[i] - newSlope*20]
                plt.plot(ntempx,ntempy, color=rayColor)  
            else:
                ntempx = [x[i], x[i] + 20]
                ntempy = [y[i], y[i] + newSlope*20]
                plt.plot(ntempx,ntempy, color=rayColor)
                

            
    if (slopeCircle >= 0):
        if (slopeLine <= 0):
            newSlope = np.tan(np.arctan(slopeCircle) + np.pi + theta)
            if ((np.arctan(slopeCircle) + np.pi + theta) >= 3*np.pi/2):
                ntempx = [x[i], x[i] + 20]
                ntempy = [y[i], y[i] + newSlope*20]
                plt.plot(ntempx,ntempy, color=rayColor)  
            else:
                ntempx = [x[i], x[i] - 20]
                ntempy = [y[i], y[i] - newSlope*20]
                plt.plot(ntempx,ntempy, color=rayColor)
    
    
#plot settings for the graph display
plt.axis([-15,15,-10,10])
plt.axis('off')
plt.title('Limacon')
plt.show()