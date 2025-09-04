import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ChartDataResponse } from "./models/stats.model";


@Injectable({
    providedIn: 'root'
})
export class StatsService{
    private http = inject(HttpClient);

    getStats(params: { 
        chartType: string, 
        startMonth: string,
        endMonth: string,
        groupBy?: string,
    }){
        let httpParams = new HttpParams()
            .set('chart_type', params.chartType,)
            .set('start_month', params.startMonth,)
            .set('end_month', params.endMonth,);
        if (params.groupBy)
            httpParams.set('group_by', params.groupBy);
                
        return this.http.get<ChartDataResponse>(
            `${environment.apiUrl}/stats`, {
                params: httpParams
            }
        );
    }


}
