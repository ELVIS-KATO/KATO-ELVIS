import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Minimal valid PDF placeholder — REPLACE with your real resume PDF
const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Contents 4 0 R>>endobj
4 0 obj<</Length 68>>stream
BT /F1 16 Tf 50 750 Td (Kato Elvis - Resume Placeholder - Replace PDF) Tj ET
endstream
endobj
xref
0 5
trailer<</Size 5/Root 1 0 R>>
startxref
0
%%EOF`

const dir = 'public'
mkdirSync(dir, { recursive: true })
writeFileSync(join(dir, 'resume-kato-elvis.pdf'), pdf)
console.log('Created public/resume-kato-elvis.pdf (placeholder)')
