---
layout: layouts/base.njk
title: Veterinary Practice
tags:
  - domain
---

# {{ title }}

1.  Veterinary Practice Operations

    1. Appointment Management

       - Scheduling (species-specific constraints, provider availability)
       - Visit types (wellness exam, emergency, surgery, telemedicine)
       - Reminders & notifications

    1. Client Management

       - Client profiles (contact info, preferences, billing data)
       - Consent forms & legal documents
       - Communication logs (SMS, email, phone)

    1. Patient (Animal) Management

       - Species, breed, age, sex, life-stage
       - Identification (microchip, tattoo, RFID, internal IDs)
       - Problem list & medical history
       - Allergies, behavioral flags

1.  Clinical Workflow

    1.  Intake / Triage

        - Reason for visit
        - Vitals tracking (weight, temp, pulse, pain score)
        - Pre-visit questionnaires

    1.  Medical Records (EMR/VMR)

        - SOAP notes
        - Exam findings
        - Vaccination records
        - Diagnostic test results
        - Attachments (DICOM images, PDFs, lab results)

    1.  Treatment Plans

        - Diagnoses (ICD-11, SNOMED-CT-Vet, proprietary practice codes)
        - Procedures
        - Medications & dosages
        - Follow-up recommendations

1.  Diagnostics & Lab Integration

    1. In-House Equipment

       - Blood analyzers
       - Radiology (X-ray, ultrasound)
       - Integration protocols (HL7-like vendor APIs, device-specific formats)

    1. Reference Laboratories

       - Ordering workflows
       - Result imports (PDF, structured XML/JSON)
       - Status tracking (ordered → in-progress → results available)

1.  Pharmacy & Inventory

    1. Medication Management

       - Drug database (FDA, custom practice formulary)
       - Controlled substances tracking
       - Dispensing workflows

    1. Inventory Control

       - Stock counts
       - Automated re-ordering
       - Expiration date management
       - Vendor accounts & purchase orders

1.  Billing & Financials

    1. Estimates

       - Itemized services and medications
       - Approval workflows

    1. Invoicing

       - Auto-generation from treatments
       - Bundles/packages (e.g., wellness plans)

    1. Payments

       - Payment processing (cards, cash, CareCredit, online payments)
       - Refunds, adjustments

    1. Accounting Integrations

       - QuickBooks, Xero
       - Tax rules (differs by region)

1.  Practice Administration

    1. Staff & Roles

       - Veterinarians, techs, front desk roles
       - Access control & permissions
       - Training management
       - Licensing/credential tracking

    1. Workflows & Configuration

       - Customizable templates (SOAP, estimates, discharge instructions)
       - Procedure code catalogs
       - Scheduling templates

    1. Reporting & Analytics

       - KPIs (appointments, revenue, compliance)
       - Inventory usage
       - Client retention

1.  Compliance & Regulatory

    1. Medical Records Requirements

       - Retention laws (varies by region)
       - Incomplete/locked record rules

    1. Controlled Substances

       - DEA/CSA logs
       - Audit trails

    1. Data Privacy

       - GDPR/CCPA equivalents for clients
       - Audit logging
       - Role-based access control

1.  Species-Specific Considerations

    1.  Small Animals

        - Dogs, cats, exotics

    1.  Large Animals

        - Equine workflows
        - Farm operations (herds, groups)
        - Mobile/field service capabilities

    1.  Wildlife / Zoo

        - Group tracking
        - Enclosure management

1.  Integrations & Interoperability

    1. Communication Services

       - SMS, email, push notifications

    1. Payment Providers
    1. Telemedicine
    1. Insurance / Wellness Plans

       - Claim submission workflows
       - Plan management & utilization
