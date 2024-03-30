import React from "react";
import "./Accordian.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

const Accordian = () => {
  return (
    <div className="accordian-section">
      <h1>FAQ's</h1>
      <p>(Frequently Asked Questions)</p>
      <div className="accordian">
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            How much does it cost?
          </AccordionSummary>
          <AccordionDetails>
            Every project is unique so to get a quote, you can send your plans
            to info@iambuilders.com. General price ranges for smaller projects
            can run in the $400-500 range, mid-sized projects can be in the
            $500-800 range, and large projects $1000+.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What is your hourly Rate?
          </AccordionSummary>
          <AccordionDetails>
            Our pricing is based on a per-project basis, not hourly. Our
            estimates are perfect for busy contractors that need an “On-Demand”
            estimate completed. Most contractors bid only a few projects per
            month and our pricing tends to be more affordable than hiring a full
            time in-house estimator.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What is your turn around or delivery time?
          </AccordionSummary>
          <AccordionDetails>
            For most projects our delivery is between 6-9 business days.
            Occasionally larger or more complex projects may take 8-10 or 10-12
            business days. We always quote you an estimated timeframe before
            starting. If you have a rush project needed sooner than 6 days, let
            us know your bid date and we’ll try to accommodate, or add a small
            expedite fee to cover overtime costs with a guaranteed date.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What Software do you use for estimating?
          </AccordionSummary>
          <AccordionDetails>
            We use digital takeoff software to perform our quantities and
            proprietary software to prepare and finalize the assemblies and
            pricing. Our labor and material pricing comes from Craftsman
            National Construction Estimator Database Suite which is updated
            multiple times per year, and pricing is based on your project’s zip
            code so your bid will be as accurate and competitive as possible.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            Where do you get your prices from ?
          </AccordionSummary>
          <AccordionDetails>
            We get our pricing from Craftsman National Construction Estimator
            Database Suite which is updated multiple times per year, and pricing
            is based on your project’s zip code so your bid will be as accurate
            and competitive as possible.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            Where do you get your prices from ?
          </AccordionSummary>
          <AccordionDetails>
            We get our pricing from Craftsman National Construction Estimator
            Database Suite which is updated multiple times per year, and pricing
            is based on your project’s zip code so your bid will be as accurate
            and competitive as possible.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What types of estimates do you do?
          </AccordionSummary>
          <AccordionDetails>
            We specialize in Commercial, Residential, and Industrial projects.
            We perform estimates for Remodeling, New Construction, High Rises,
            Multifamily, Restaurants, Mixed-Use Retail and Residential,
            Warehouses, and more! We do estimates for General Contractors,
            Subcontractors, Developers, Architects, Owners, Lenders/Banks,
            Appraisers, Insurance Companies, and more.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What if i don't have plans for the project?
          </AccordionSummary>
          <AccordionDetails>
            That’s ok too. We can estimate the costs of projects based on
            quantities you give us or sketches.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            Can you do estimates if the drewings are not completed?
          </AccordionSummary>
          <AccordionDetails>
            Yes! We work with Architects, Developers, and Owners frequently in
            the early planning and design stages. If you have preliminary
            drawings, or an idea of what you would like to build, our team can
            estimate the cost of construction so you can make educated
            purchasing and design decisions.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            How to i send you plans for the project?
          </AccordionSummary>
          <AccordionDetails>
            We make it easy to send us your plans. You can send them to us in
            any of the following ways: You can email the plans and trades you
            would like to bid to info@iambuilders.com You can email us your
            Invitation to Bid Email to info@iambuilders.com with the trades you
            would like to bid. You can upload through our Dropbox by visiting:
            www.iambuilders.com/upload
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What payment method do you except?
          </AccordionSummary>
          <AccordionDetails>
            We use secure Quickbooks Online Payments where you can easily pay
            with your Credit Card. Once you send us your plans, we’ll send you a
            Quickbooks Invoice prior to starting for you and your team to
            review. If you choose to proceed, you can easily make a payment
            through your Desktop, Mobile Phone, or you can call us directly to
            process the payment. You can reach us at: (305) 433-6432.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            How accurate are your estimates?
          </AccordionSummary>
          <AccordionDetails>
            Our estimates are very accurate and based on your project’s zip code
            so your pricing will be accurate and competitive. Our estimates are
            designed as guidelines for you to finalize pricing so you’ll be able
            to make your final adjustments with the Excel Spreadsheet we send
            you. You can adjust Supervision, Equipment, Profit, and manually
            override any of our estimated pricing. Our labor and material costs
            come from Craftsman National Construction Estimator Database which
            is updated several times per year. Our estimating team are
            construction professionals with plenty of field experience and we
            make adjustments based on factors such as changes to productivity,
            equipment, etc. For example, if a wall is 20 ft high, we’ll need to
            include a lift along with slower productivity to adjust the labor
            price.
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: "100%" }}>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            What Guarantees do you offers?
          </AccordionSummary>
          <AccordionDetails color="secondary">
            Pricing in all regions varies and we used highly accurate cost
            databases along with field experience to price projects. We carry a
            $1 Million Accuracy Guarantee covered by our Errors and Omissions
            Insurance. If we were to ever make a mistake and you lose money on a
            project, you are completely covered. There will always be a
            variation in pricing based on the fluctuations in the market, labor
            shortages or surpluses, and major events that suddenly increase or
            decrease material or labor pricing.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
