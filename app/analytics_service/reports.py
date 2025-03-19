from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest
from .. import Config

def generate_analytics_report():
    client = BetaAnalyticsDataClient()
    request = RunReportRequest(
        property=f"properties/{Config.GA_PROPERTY_ID}",
        date_ranges=[{"start_date": "7daysAgo", "end_date": "today"}],
        metrics=[{"name": "engagementRate"}, {"name": "sessions"}]
    )
    response = client.run_report(request)
    return response