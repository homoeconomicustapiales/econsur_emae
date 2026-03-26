async function loadData() {

    const res = await fetch("http://localhost:3000/data");
    const data = await res.json();

    return data.map(d => ({
        time: d.fecha.split("T")[0],
        value: d.valor
    }));
}

async function init() {

    const container = document.getElementById("chart");

    const { chart, series } = createChart(container);

    const data = await loadData();

    series.setData(data);

    // Export PNG
    document.getElementById("exportBtn").addEventListener("click", () => {

        const canvas = container.querySelector("canvas");
        const link = document.createElement("a");

        link.download = "emae.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

init();
