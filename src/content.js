const color = document.getElementById("novel_color");
color.style.writingMode = "vertical-rl";
color.style.textOrientation = "upright";
color.style.overflowX = "scroll";
color.style.width = "100%";
color.style.height = "80%";

const honbun = document.getElementById("novel_honbun");
honbun.style.width = "auto";

const novel_a = document.getElementById("novel_a");
novel_a.style.borderTop = "none";
novel_a.style.borderRight = "3px double #999999";
novel_a.style.width = "auto";

const novel_p = document.getElementById("novel_p");
novel_p.style.borderBottom = "none";
novel_p.style.borderLeft = "3px double #999999";
novel_p.style.width = "auto";
