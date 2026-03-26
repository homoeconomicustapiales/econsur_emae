function createChart(container) {

    const chart = LightweightCharts.createChart(container, {
        width: container.clientWidth,
        height: 500,
        layout: {
            background: { color: "#0f172a" },
            textColor: "#e2e8f0"
        },
        grid: {
            vertLines: { color: "#1e293b" },
            horzLines: { color: "#1e293b" }
        },
        timeScale: {
            timeVisible: true
        }
    });

    const series = chart.addLineSeries({
        color: "#22c55e",
        lineWidth: 2
    });

    return { chart, series };
}
