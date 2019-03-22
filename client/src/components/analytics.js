
import React, { Component } from 'react'
import gapi from 'gapi'
class Analytic extends Component{
	constructor(props){
		super(props);
		this.state = {
			client_id: "872233442072-b75u1eona4v9cpgnvls65ckqpdmtkb9r.apps.googleusercontent.com",
			view_id: "191697764"
		};
		this.queryReports = this.queryReports.bind(this);
		this.displayResults = this.displayResults.bind(this);
	}

	queryReports() {
	    gapi.client.request({
	      path: '/v4/reports:batchGet',
	      root: 'https://analyticsreporting.googleapis.com/',
	      method: 'POST',
	      body: {
	        reportRequests: [
	          {
	            viewId: this.state.view_id,
	            dateRanges: [
	              {
	                startDate: '7daysAgo',
	                endDate: 'today'
	              }
	            ],
	            metrics: [
	              {
	                expression: 'ga:sessions'
	              }
	            ]
	          }
	        ]
	      }
	    }).then(this.displayResults, console.error.bind(console));
	}

	displayResults(response) {
		var formattedJson = JSON.stringify(response.result, null, 2);
		document.getElementById('query-output').value = formattedJson;
	}

	render() {
		return (
			<div>
				<head>
				  <meta charset="utf-8"/>
				  <title>Hello Analytics Reporting API V4</title>
				  <meta name="google-signin-client_id" content={this.state.client_id}/>
				  <meta name="google-signin-scope" content="https://www.googleapis.com/auth/analytics.readonly"/>
				</head>
				<body>

					<h1>Hello Analytics Reporting API V4</h1>

					
					<p class="g-signin2" data-onsuccess={this.queryReports}></p>

					
					<textarea cols="80" rows="20" id="query-output"></textarea>

					
					<script src="https://apis.google.com/js/client:platform.js"></script>

				</body>
			</div>
		);
	}
};

export default Analytic