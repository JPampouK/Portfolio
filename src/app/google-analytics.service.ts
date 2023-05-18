import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoogleAnalyticsService {
  private readonly VIEW_ID = '5210216944'; // Ihre Google Analytics-View-ID hier eintragen

  constructor(private http: HttpClient) {}

  // getVisitorCount(): Promise<number> {
  //   const analyticsData = {
  //     reportRequests: [
  //       {
  //         viewId: this.VIEW_ID,
  //         dateRanges: [
  //           {
  //             startDate: '7daysAgo',
  //             endDate: 'today'
  //           }
  //         ],
  //         metrics: [
  //           {
  //             expression: 'ga:users'
  //           }
  //         ]
  //       }
  //     ]
  //   };

  //   return this.http.post<any>(
  //     'https://analyticsreporting.googleapis.com/v4/reports:batchGet',
  //     analyticsData
  //   )
  //   .toPromise()
  //   .then(response => {
  //     const visitorCount = response.reports[0].data.totals[0].values[0];
  //     return parseInt(visitorCount);
  //   })
  //   .catch(error => {
  //     console.error('Error retrieving visitor count from Google Analytics:', error);
  //     return 0;
  //   });
  // }
}
