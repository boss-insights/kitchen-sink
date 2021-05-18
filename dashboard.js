/**
 * Bright Lend Dashboard
 * hints support markdown
 */

$(document).ready(function () {

    $('body.account-type-standard #navWelcome span').html('Overview');

    var workflow = {
        title: ' ',
        menu: [{
            name: 'Secure Mail',
            app: 'company/messages',
            icon: 'comments',
            hint: 'Secure Mail',
        },{
            title: 'Loan Workflow'
        },{
            name: '1. Company Profile',
            app: 'company/profile',
            icon: 'account',
            hint: 'Please ensure your legal name matches your application and verify the completeness and accuracy of other fields.'
        }, {
            name: '2. Data Intake',
            icon: 'cloud-upload',
            menu:[{
                name: '2.1 Cloud Connections',
                app: 'company/integrations',
                icon: 'cloud-upload',
                options:{tags:'accounting,payroll'}
            },{
                name: '2.2 Upload Documents',
                app: 'company/documents',
                icon: 'upload',
                hint: 'Step 2.2: You can upload a copy of your EXPENSES as a csv file, a template is provided.\n' +
                    '1. Upload your expense report in the top right corner.  Make sure your document is formatted in the same way as our template (which can be found under \'Templates\').\n Please note that you will need spreadsheet software e.g. Microsoft Excel, Google Sheets or LibreOffice Calc etc to open the template.\n' +
                    '2. Once the upload is complete, you will find your document listed under \'Business Documents\'.\n' +
                    '3. Click on your newly uploaded document and edit all the fields related to the document in the \'Document Properties\' panel on the right.\n' +
                    '4. Click \'Import\' so that the contents of your document will be imported and be used in later steps.\n',
                options:{fileTypes:'.csv',docFilter:'EXPENSE_REPORT',show:'templates'}
            },{
                name: '2.3 Map Data',
                app: 'company/mapping',
                icon: 'calendar',
                hint: 'Please fill in the information below which will enable the platform to better understand your finances.\n' +
                    'There are four categories to fill in:\n' +
                    '1.    Period Name: This is pre-filled to default period – there is no need to alter this, it is for your reference and useful if you have multiple periods defined\n' +
                    '2.    Accounting Source: Your accounting system will be included in a drop-down menu. For example, if you used QuickBooks, it will be an option for you to select. Please select it.\n' +
                    '3.    Financial Year End: Please enter the year end of your company\n' +
                    '4.    Accounting Source Start Date: Please enter the date that you started using the cloud based accounting system. If you are using an excel file, please enter the date you started using that file (e.g. January 1, 2019)\n' +
                    '5.    Click save, then click *modify chart of accounts* and review the list to ensure each account is mapped correctly'
            },{
                name: '2.4 Reconcile',
                app: 'company/reconciliation',
                icon: 'refresh-alt',
                options: {tags: 'accounting'},
                hint: 'When providing new data you should indicate the date it was last reviewed for accuracy, for example you may provide financial information until Apr 20th yet have only verified your accounting transactions up till Mar 31st - in this case you would indicate Mar 31st as the date information can be relied on until'
            }]
        },{
            name: '3. Closing Docs',
            app: 'company/closing-docs-borrower',
            icon: "border-color"
        },{
            name: '4. Submit',
            app: 'company/forms',
            icon: 'flag',
            hint: 'Verify the completeness and accuracy of your data before submitting the form below.',
            options: {key:'submit'}
        }
        ]
    };

    myIntranetApps.dashboard.renderCustomWorkflow(workflow);

});

