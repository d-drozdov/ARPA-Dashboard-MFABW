"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/stickyScroll";
import Image from "next/image";

const content = [
  {
    title:
      "SNAP Percentage and Average Median Income by Community Statistical Area",
    description:
      "This map is meant to model the relationship between the percentage of SNAP recipients and the average median income in each Community Statistical Area (CSA) in Baltimore City. The map is color-coded to show the percentage of SNAP recipients in each CSA, with darker shades of blue indicating higher percentages of SNAP utilization. The map is interactive, allowing users to hover over each CSA to see the exact percentage of SNAP recipients and average median income in that area. The map is also zoomable, allowing users to zoom in and out to see more or less detail. The map is meant to help users understand the relationship between SNAP recipients and average median income in Baltimore City, and to help users identify areas of the city that may be in need of additional resources or support.",
    content: (
      <div className="iframe-container">
        <iframe src="/snap_percentage.html" allowFullScreen />
      </div>
    ),
  },
  {
    title:
      "Identifying 'Food Insecurity Areas' Based on Population in Poverty and/or Without Vehicles",
    description:
      "Each subregion in Baltimore is designated by specific FIPS values.  This map combines the impact of both inaccessibility to vehicles as well as population under 150% of the Federal Poverty Line (FPL).  A higher des value indicates a higher combined percentage of the population in both categories (ex. a des score of 0.4/0.5 could be created by having 80% without vehicles (+0.2) and 80% of population under FPL (+0.2).  Overall, this map indicates the presence of variables that allow us to classify a region as a 'food desert'.",
    content: (
      <div className="iframe-container">
        <iframe src="/food_desert.html" allowFullScreen />
      </div>
    ),
  },
  {
    title:
      "Social Vulnerability Index (SVI) and Produce Box Distribution Sites",
    description:
      "From the graph, we can see that most of the produce box distribution sites (green dots) are in regions where SVI scores are high. These regions are most vulnerable to not having access to healthy food. Although there are many grocery stores throughout Baltimore, they often do not cover areas where they are most necessary. Our distribution sites help alleviate the pressure of not having a nearby grocery store in those regions by providing nutritious produce to the residents. For example, the largest distribution sites are in the East Baltimore area, one of the most vulnerable areas where most residents live far away from grocery stores. These sites give residents easier access to fresh produce to fulfill their nutritional needs.",
    content: (
      <div className="iframe-container">
        <iframe src="/svi_dist_sites.html" allowFullScreen />
      </div>
    ),
  },
  {
    title:
      "Availability of Healthy Food by Community in Baltimore City County (2015)",
    description:
      "The HFAI (Health Availability Food Index) is a measure looking at the quantity and quality of healthy food in different Baltimore city communities. The map displays which areas have greater need of more healthy foods, as these areas are closer to blue in color. Those with a lower HFAI score have a low availability of healthy foods and are therefore higher priority areas.",
    content: (
      <div className="iframe-container">
        <iframe src="/Baltimore_HFAI.html" allowFullScreen />
      </div>
    ),
  },
];

export default function DataPanes() {
  return <StickyScroll content={content} />;
}
