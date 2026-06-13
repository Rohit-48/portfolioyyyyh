"use client";

import Gravity, { MatterBody } from "./fancy/physics/gravity";

export default function FloatingBadges() {
  return (
    <div className="fixed inset-0 z-0">
      <Gravity gravity={{ x: 0, y: 1 }} grabCursor={true}>
        {/* Row 1 */}
        <MatterBody x="15%" y="10%">
          <div className="rounded-2xl bg-cyan-400 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ⚛ REACT
          </div>
        </MatterBody>

        <MatterBody x="30%" y="5%">
          <div className="rounded-2xl bg-yellow-400 px-4 py-2.5 text-sm font-bold shadow-lg text-black">
            JS JAVASCRIPT
          </div>
        </MatterBody>

        <MatterBody x="50%" y="8%">
          <div className="rounded-2xl bg-blue-600 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            TS TYPESCRIPT
          </div>
        </MatterBody>

        <MatterBody x="65%" y="12%">
          <div className="rounded-2xl bg-orange-600 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ⚙ RUST
          </div>
        </MatterBody>

        <MatterBody x="78%" y="6%">
          <div className="rounded-2xl bg-indigo-500 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ❄ NIX
          </div>
        </MatterBody>

        <MatterBody x="88%" y="15%">
          <div className="rounded-2xl bg-black px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            N NEXT.JS
          </div>
        </MatterBody>

        {/* Row 2 */}
        <MatterBody x="10%" y="25%">
          <div className="rounded-2xl bg-blue-400 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            CSS
          </div>
        </MatterBody>

        <MatterBody x="25%" y="20%">
          <div className="rounded-2xl bg-teal-400 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ~ TAILWIND
          </div>
        </MatterBody>

        <MatterBody x="42%" y="22%">
          <div className="rounded-2xl bg-gray-600 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            C
          </div>
        </MatterBody>

        <MatterBody x="55%" y="18%">
          <div className="rounded-2xl bg-green-600 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ⬡ NODE
          </div>
        </MatterBody>

        <MatterBody x="68%" y="25%">
          <div className="rounded-2xl bg-zinc-800 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            EX EXPRESS
          </div>
        </MatterBody>

        <MatterBody x="82%" y="20%">
          <div className="rounded-2xl bg-orange-500 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            🔥 HONO.JS
          </div>
        </MatterBody>

        {/* Row 3 */}
        <MatterBody x="20%" y="35%">
          <div className="rounded-2xl bg-yellow-500 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            🐍 PYTHON
          </div>
        </MatterBody>

        <MatterBody x="38%" y="30%">
          <div className="rounded-2xl bg-purple-500 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ~ MOTION
          </div>
        </MatterBody>

        <MatterBody x="55%" y="35%">
          <div className="rounded-2xl bg-violet-500 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            ✦ FIGMA
          </div>
        </MatterBody>

        <MatterBody x="70%" y="30%">
          <div className="rounded-2xl bg-blue-700 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            C++
          </div>
        </MatterBody>

        <MatterBody x="85%" y="35%">
          <div className="rounded-2xl bg-amber-800 px-4 py-2.5 text-sm font-bold shadow-lg text-white">
            🍞 BUN
          </div>
        </MatterBody>
      </Gravity>
    </div>
  );
}
