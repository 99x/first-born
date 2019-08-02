
const mapColors = {
    default: {
        geometry: {
            fill: {
                admistrative: "#d6e2e6",
                landscape: {
                    man_made: "#d6e2e6",
                    natural: "#dae6eb",
                },
                poi: {
                    default: "#d6e2e6",
                    park: "#cae7a8",
                    sports_complex: "#c6e8b3"
                },
                road: {
                    highway: "#f7fdff",
                    arterial: "#eef3f5",
                    local: "#edf3f5"
                },
                water: "#a6cbe3"
            },
            stroke: {
                admistrative: "#cddbe0",
                landscape: {
                    man_made: "#cddbe0",
                },
                poi: {
                    park: "#bae6a1",
                    sports_complex: "#bae6a1"
                },
                road: {
                    highway: "#beced4",
                    arterial: "#cddbe0",
                    local: "#cddbe0"
                }
            }
        },
        labels: {
            text: {
                fill: {
                    admistrative: "#7492a8",
                    landscape: {
                        natural: "#7492a8",
                    },
                    poi: {
                        default: "588ca4",
                    },
                    road: {
                        default: "#41626b"
                    },
                    transit: {
                        line: "#588ca4",
                        station: "#008cb5"
                    }
                },
            }
        }
    },
}

export function getMapColor(mapType) {
    return mapColors["default"];
}