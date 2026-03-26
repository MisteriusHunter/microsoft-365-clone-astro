import sharp from "sharp";
import path from "path";
import fs from "fs";

const baseDir = path.resolve(process.cwd(), "public/assets/m365");
const outDir = path.resolve(baseDir, "crops");

fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  {
    out: "hero-right.png",
    in: "hero-top.png",
    left: 171,
    top: 55,
    width: 498,
    height: 286,
  },
  {
    out: "apps-grid-top-crop.png",
    in: "apps-grid-top.png",
    left: 0,
    top: 81,
    width: 1024,
    height: 243,
  },
  {
    out: "apps-grid-bottom-crop.png",
    in: "apps-grid-bottom.png",
    left: 0,
    top: 52,
    width: 1024,
    height: 243,
  },
  {
    out: "pricing-crop.png",
    in: "pricing.png",
    left: 0,
    top: 81,
    width: 1024,
    height: 397,
  },
  {
    out: "footer-crop.png",
    in: "footer.png",
    left: 0,
    top: 81,
    width: 1024,
    height: 316,
  },
];

for (const job of jobs) {
  const inPath = path.join(baseDir, job.in);
  const outPath = path.join(outDir, job.out);
  // eslint-disable-next-line no-await-in-loop
  const img = sharp(inPath);
  await img.extract({
    left: job.left,
    top: job.top,
    width: job.width,
    height: job.height,
  }).toFile(outPath);

  // eslint-disable-next-line no-console
  console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
}

