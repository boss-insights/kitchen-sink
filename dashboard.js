/* jshint undef: true, unused: true, strict: false */
/* globals $ */
/* globals myIntranetApps */

$(document).ready(function () {

    var workflow = {
        title: '',
        menu: [{
            name: 'Secure Mail',
            app: 'company/messages',
            icon: 'comments',
            hint: 'Secure Mail',
        },{
            title: 'Loan Workflow'
        },{
            name: '1. Loan Selection',
            app: 'company/ppp2-form-selection',
            hint: 'Step 1: If you have not received a PPP loan before, select "First Draw" and you will be able to fill out SBA Form 2483 in step 2. \n' +
                'If you have already received a first draw PPP loan, select "Second Draw" and you will be able to fill out SBA Form 2483-SD in step 2.',
        },{
            name: '2. Supporting Documents',
            app: 'company/documents',
            icon: 'cloud-upload',
            hint: 'Step 2: The SBA requires you to provide supporting documentation for your PPP loan. You must also keep this documentation for 6 years. Please upload eligible receipts, payroll records and tax documents as needed. NOTE: YOU MUST CATEGORIZE YOUR DOCUMENTS FOR THEM TO BE ACCEPTED BY THE SBA, UNCATEGORIZED DOCUMENTS WILL NOT BE SUBMITTED AND AS A RESULT MAY DELAY OR JEOPARDIZE YOUR APPLICATION.\n' +
                '\n Required Financial Documents:' +
                '\n - Payroll statement from pay period inclusive of 02/15/2020' +
                '\n - 2019 or 2020 (whichever was used to calculate payroll) tax forms or financial/bank records' +
                '\n - IRS Forms 941 (2019 & 2020)' +
                '\n - State quarterly wage unemployment tax insurance tax reporting forms. Equivalent third-party payroll processor records can be provided in place of tax forms (must be third-party, NOT printouts from QuickBooks®, etc.)' +
                '\n - Evidence of any employee group retirement plans' +
                '\n - Evidence of any employee group health, life, disability, vision and dental insurance contributions' +
                '\n - Partnerships: K-1\'s 2019 or 2020' +
                '\n - Independent Contractors: IRS Form 1099 for 2019 or 2020' +
                '\n - Sole Proprietorship/Self Employed: IRS Form 1040, Schedule C for 2019 or 2020\n\n' +
                '1. Upload your document in the top right corner. Allowed file types include .pdf,.xls,.xlsx,.csv,.doc,.docx,.jpg,.jpeg,.png\n' +
                '2. Once the upload is complete, you will find your document listed under \'Business Documents\'.\n' +
                '3. Click on your newly uploaded document and edit the DOCUMENT TYPE field in the \'Document Properties\' panel on the right in order to classify the document for SBA submission.\n' +
                '4. Click \'Save\' when done.\n' +
                '\n *NOTE: UNCATEGORIZED DOCUMENTS ARE HIGHLIGHTED IN RED',
            options: {
                fileTypes: '.pdf,.xls,.xlsx,.csv,.doc,.docx,.jpg,.jpeg,.png',
                redUncategorized: true,
                docFilter: 'LOAN_APPLICATION_SUPPORTING_DOCS_PAYROLL:1,DENIAL_JUSTIFICATION:3,LOAN_APPLICATION_SUPPORTING_DOCUMENTS:4,FAITH_BASED_ADDENDUM_TO_2483:5,ADDENDUM_B_TO_2483:6,ADDENDUM_A_TO_2483:7,MISCELLANEOUS:9,TRANSCRIPT_OF_ACCOUNT:24,BORROWER_NOTE:25,SBA_FORM_2483:30,IRS_FORM_941:941,IRS_FORM_943:943,IRS_FORM_1040:1040,IRS_FORM_1065:1065,IRS_FORM_1120:1120'
            }
        },{
            name: '3. Application',
            menu: [{
                name: '3.1. Loan Form',
                app: 'company/ppp2-draw-application',
                icon:'caret-right',
                hint:
                    '\nStep 3.1: PPP Loan Form - \n' + '&nbsp;' +
                    '\nIn order do fill out your PPP draw form, please follow the guidelines listed below.  \n' +
                    '1. Enter the information of the business (legal name, EIN/SSN/ITIN, address, etc.);\n' +
                    '2. Provide the required information related to the requested loan amount such as:\n' +
                    '   a) Average monthly payroll;\n' +
                    '   b) Number of employees\n' +
                    '   (if you are not sure about the maximum amount allowed for your business, use the calculator available in the form);\n' +
                    '3. Supply the information about the business’ first PPP loan and the reduction in gross receipts __(second draw only)__; \n' +
                    '4. List al the owners of 20% or more of the business’  equity and their data;\n' +
                    '5. Read carefully the questions asked, ticking “Yes” or “No” for each one of them and typing your initials where required;\n' +
                    '6. Fill out the name and signature of the authorized representative, select the current date and submit.  \n' +
                    '\nYou can always save the form as a draft and come back to it later.  \n'
            },{
                name: '3.2. Addendum A',
                app: 'company/forms',
                icon:'caret-right',
                hint: 'Step 3.2: Loan Addendum A. Please fill in if you answered "Yes" for question 3 in "PPP Loan Application Form"',
                options: {key: 'ppp2-draw-application-addendum-a'}
            },{
                name: '3.3. Addendum B',
                app: 'company/forms',
                icon:'caret-right',
                hint: 'Step 3.3: Loan Addendum B. ADDENDUM B ONLY APPLIES TO FIRST DRAW LOAN APPLICATIONS. Please fill in if you answered "Yes" for question 4 in "PPP First Draw Loan Application"(Step 3.1). If the Borrower or any affiliated company of the Borrower has obtained an Economic\n' +
                    'Injury Disaster Loan (EIDL), Grant, or both, please give the details below',
                options: {key: 'ppp2-draw-application-addendum-b'}
            }]
        },{
            name: '4. Closing Docs',
            app: 'company/closing-docs-borrower',
            icon: "border-color"
        },{
            name: '5. Lender Review',
            masterOnly: true,
            app: 'company/ppp2-lender-review',
            icon: 'assignment-check',
            hint: 'Step 5: Lender Review - Use this page to monitor the status of the application and to submit or cancel SBA loan requests',
        },{
            title: 'Forgiveness Workflow'
        },{
            name: '1. Form Selection',
            app: 'company/ppp-ez',
            hint: 'Step 1: Please follow the instructions to determine which of the three SBA forms you should use.'
        },{
            name: '2. Data Intake',
            icon: 'cloud-upload',
            menu:[{
                name: '2.1 Cloud Connections',
                app: 'company/integrations',
                icon: 'caret-right',
                hint: 'Step 2.1: Please connect your business applications to complete your profile and prefill your loan forgiveness application per SBA form 3508. If you do not use cloud based systems you can upload files in the next step.',
                options:{tags:'accounting,payroll'}
            },{
                name: '2.2 Upload Expenses',
                app: 'company/documents',
                icon: 'caret-right',
                hint: 'Step 2.2: You can upload a copy of your EXPENSES as a csv file, a template is provided.\n' +
                    '1. Upload your expense report in the top right corner.  Make sure your document is formatted in the same way as our template (which can be found under \'Templates\').\n Please note that you will need spreadsheet software e.g. Microsoft Excel, Google Sheets or LibreOffice Calc etc to open the template.\n' +
                    '2. Once the upload is complete, you will find your document listed under \'Business Documents\'.\n' +
                    '3. Click on your newly uploaded document and edit all the fields related to the document in the \'Document Properties\' panel on the right.\n' +
                    '4. Click \'Import\' so that the contents of your document will be imported and be used in later steps.\n' +
                    '\n NOTE: This page is to upload expenses ONLY and MUST be in CSV format. To upload supporting documentation go to Step 5.',
                options:{fileTypes:'.csv',docFilter:'EXPENSE_REPORT',show:'templates'}
            }]
        },{
            name: '3. Company Profile',
            app: 'company/profile',
            hint: 'Step 3: Your information has been prefilled. Please ensure your legal name matches your loan application and verify the completeness and accuracy of other fields.'
        },{
            name: '4. Forgiveness Eligibility',
            menu: [{
                name: '4.1 Payroll',
                app: 'company/payrolls',
                icon: 'caret-right',
                hint: 'Step 4.1: This section gathers payroll information including cash compensation, hours and wages as required by SBA form 3508 Schedule A. Depending on your earlier inputs in Step 2, the information may be pre-filled. Please review it and correct if necessary. Note: All dollar amounts are assumed to be in USD. If you are using a different currency, please convert to USD amounts.\n'
            },{
                name: '4.2 Expenses',
                app: 'company/expenses',
                icon: 'caret-right',
                hint: 'Step 4.2: List and categorize any payroll related expenses AND non-payroll related expenses.  You may choose to import your expenses or input them manually. Expenses must have a category and a date within the Covered Period to be included in loan forgiveness calculations. The  ‘Compensation to Owners (optional)’ table is for listing compensation to owner-employees, self-employed individuals, or general partners, who should not have been included in the Payrolls step. Note: All dollar amounts are assumed to be in USD. If you are using a different currency, please convert to USD amounts. \n' +
                    '\nTo import manually, select an accounting source, the date range you would like to import expenses from, and click import. Any cloud connections made and files uploaded in Step 2 will be available as accounting sources. Imported expenses will have no category, please fill in any missing info.\n'
            }]
        },{
            name: '5. Supporting Documents',
            app: 'company/documents',
            icon: 'collection-text',
            hint: 'Step 5: The SBA requires you to provide supporting documentation for your PPP forgiveness. You must also keep this documentation for 6 years. Please upload eligible receipts, payroll records and tax documents as needed. NOTE: YOU MUST CATEGORIZE YOUR DOCUMENTS FOR THEM TO BE ACCEPTED BY THE SBA, UNCATEGORIZED DOCUMENTS WILL NOT BE SUBMITTED AND AS A RESULT MAY DELAY OR JEOPARDIZE YOUR FORGIVENESS APPLICATION.\n' +
                '1. Upload your document in the top right corner. Allowed file types include .pdf,.xls,.xlsx,.csv,.doc,.docx,.jpg,.jpeg,.png\n' +
                '2. Once the upload is complete, you will find your document listed under \'Business Documents\'.\n' +
                '3. Click on your newly uploaded document and edit the DOCUMENT TYPE field in the \'Document Properties\' panel on the right in order to classify the document for SBA submission.\n' +
                '4. Click \'Save\' when done.\n' +
                '\nPlease click [here](https://bossinsights.atlassian.net/l/c/gWum3adu) to read the documentation requirements for your forgiveness application.\n' +
                ' *NOTE: UNCATEGORIZED DOCUMENTS ARE HIGHLIGHTED IN RED',
            options:{fileTypes:'.pdf,.xls,.xlsx,.csv,.doc,.docx,.jpg,.jpeg,.png',redUncategorized:true,docFilter:'LOAN_APPLICATION_SUPPORTING_DOCS_PAYROLL:1,DENIAL_JUSTIFICATION:3,LOAN_APPLICATION_SUPPORTING_DOCUMENTS:4,FAITH_BASED_ADDENDUM_TO_2483:5,ADDENDUM_B_TO_2483:6,ADDENDUM_A_TO_2483:7,FORGIVENESS_SUPPORTING_DOCS_MORTGAGE:8,MISCELLANEOUS:9,PPP_SCHEDULE_A_WORKSHEET_FTE:10,PPP_SCHEDULE_A_WORKSHEET_TABLE_2:11,PPP_SCHEDULE_A_WORKSHEET_TABLE_1:12,3508_AND_3508EZ_SUPPORTING_DOCS_RESTRICTIONS:13,3508EZ_SUPPORTING_DOCS_FTE:14,3508_AND_3508EZ_SUPPORTING_DOCS_JOB_OFFER:15,3508_AND_3508EZ_SUPPORTING_DOCS_SALARY:16,PPP_SCHEDULE_A_WORKSHEET:17,PPP_SCHEDULE_A:18,PPP_BORROWER_DEMOGRAPHIC:19,FORGIVENESS_SUPPORTING_DOCS_UTILITY:20,FORGIVENESS_SUPPORTING_DOCS_RENT:21,FORGIVENESS_SUPPORTING_DOCS_FTE:22,FORGIVENESS_SUPPORTING_DOCS_PAYROLL:23,TRANSCRIPT_OF_ACCOUNT:24,BORROWER_NOTE:25,SBA_FORM_3508EZ:26,SBA_FORM_3508:27,SBA_FORM_2483:30,SBA_FORM_2484:31,SBA_FORM_3508S:35'}
        },{
            name: '6. Forgiveness Application',
            menu: [{
                name: '6.1 PPP Schedule A',
                app: 'company/ppp-schedule-a',
                icon: 'caret-right',
                hint: 'Step 6.1: SBA form 3508 Schedule A is completed based on your input. Please verify the data. If there are any discrepancies, please go back to the reference weeks or current period to edit the data. This information will be used in your forgiveness calculation.'
            },{
                name: '6.2 PPP Loan Forgiveness Calculation Form',
                app: 'company/ppp-calc',
                icon: 'caret-right',
                hint: 'Step 6.2: SBA PPP Loan Forgiveness Calculation Form is completed based on your input. Please verify the data. If there are any discrepancies, please go back to the reference weeks or current period to edit the data. This information will be used in your forgiveness calculation.'
            },{
                name: '6.3 Attestation and Submission',
                app: 'company/ppp-attestation',
                hint: 'Step 6.3: SBA Attestation and Submission is completed based on your input. Please verify the data. If there are any discrepancies, please go back to the reference weeks or current period to edit the data. This information will be used in your forgiveness calculation.',
                icon: 'caret-right',
            }]

        },{
            name: '7. Lender Review',
            masterOnly: true,
            app: 'company/forms',
            icon: 'assignment-check',
            hint: 'Step 7: Lender Review -  By checking the \'I confirm\' box below, the Lender agrees that for each PPP loan included in this submission:\n' +
                '\n' +
                '\n * This submission accurately reflects the Lender’s decision regarding the Borrower’s loan forgiveness application;\n' +
                '\n * The information provided by the Lender to SBA with this submission accurately reflects the Lender’s records for the PPP loan;\n' +
                '\n * The Lender has made its decision in accordance with the requirements set forth in Part III.2.a. of the PPP Interim Final Rule on SBA Loan Review Procedures and Related Borrower and Lender Responsibilities, as amended;\n' +
                '\n * The PPP loan has not been cancelled or repaid; and\n' +
                '\n * The Lender has not issued a previous loan forgiveness decision to SBA for this PPP loan, unless this is a resubmission following a rejection or a reconsideration of a denial without prejudice.\n' +
                '\n Things to note: \n' +
                '\n * Ensure that all required documents are submitted and categorized appropriately. \n' +
                '\n * Ensure that the covered period selected by the Borrower that is at least 8 weeks following the date of loan disbursement and not more than 24 weeks after the date of loan. \n' +
                '\n * Ensure that the covered period selected by the Borrower does not goes beyond Sept, 2021. \n' +
                '\n' +
                'For more information, please click [here](https://bossinsights.atlassian.net/wiki/spaces/SC/pages/56164410/Boss+Cares+-+PPP#Reviewing-borrower-information) to read about reviewing the documentation for forgiveness.',
            options: {key:'ppp-lender-review'}
        }]
    };

    myIntranetApps.dashboard.renderCustomWorkflow(workflow);
});
