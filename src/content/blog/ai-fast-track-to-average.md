---
title: "AI Is a Fast Track to Average"
description: "The wall between having an idea and shipping it just came down. What it was hiding is the whole game."
date: 2026-07-02
readingTime: "7 min read"
cover: "/blog/ai-fast-track-cover.png"
coverAlt: "AI Is a Fast Track to Average"
draft: false
---

For most of my working life there was a wall between "I have an idea" and "I shipped it." I want to be precise about what that wall was made of, because the lazy version of this essay calls it "labor" — the boilerplate, the grunt work, the glue — and that's not right. The wall was made of craft. It was software engineering: the architecture, the data model, the auth flow, the error handling, the accumulated principles that separate code that merely runs from code that holds up. That's real skill, hard-won over years, and it's a little insulting to wave it off as labor.

Which is exactly what makes what happened interesting. AI didn't just automate the drudgery around the edges. It reached into the part we were proud of.

And here's the thing worth sitting with: that wall of craft wasn't only an obstacle — it was a filter. It quietly killed the majority of ideas before anyone could test them, and it killed them based on how much engineering they'd take rather than whether they were any good. The ideas that survived were the ones you were willing to spend a month and real skill on. Everything else stayed a note in a doc. We told ourselves those ideas weren't worth building. Mostly, we just never checked.

## What actually changed

AI collapsed the cost of producing the first working version. The distance from "I wonder if…" to "here's a thing that runs" went from weeks to an afternoon.

I felt this most on side projects. I'd wanted a personal site for years — a place to show more of who I am than a résumé can — and it always stalled at the exact part where I'd have to build the thing. This time I had a working version live within a couple of evenings. You're reading it right now. The idea-to-prototype gap, the thing that used to eat the whole project, basically vanished.

But let me correct a cliché before I accidentally repeat it. People love to say ideas are cheap. They're not. The raw spark is abundant — sparks show up in the shower and at 11pm — but a genuinely good idea, the kind with real insight that's non-obvious and turns out to be right, is rare. What's cheap is the thought. What's expensive is knowing which thought is worth your weekend. AI made the working version cheap to produce; it did nothing to make good judgment about what to build cheap. If anything it raised the stakes, because now you can build the wrong thing much faster.

## The wall didn't disappear — it moved

Here's the sharpest way I can put it:

> AI is a fast track to average.

It will get you a working version, a competent draft, a solution that's genuinely fine — better than most people could produce alone, and faster than anyone could produce it before. But average is where it drops you off. The distance from average to excellent is exactly the distance it can't cover for you, because excellence is made of judgment, taste, correctness, and care — the parts that were never really about typing. The floor came up dramatically. The ceiling didn't move at all. And now that everyone is standing on the same raised floor, the only thing that distinguishes anything is how far above it you're willing to climb. That climb is still, entirely, our responsibility.

<div class="diagram">
<svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The floor came up. The ceiling did not move.">
  <defs>
    <linearGradient id="rise" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#8b7cf6"/><stop offset="1" stop-color="#4cc9f0"/>
    </linearGradient>
    <marker id="arr" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#6b6b80"/>
    </marker>
  </defs>

  <!-- ceiling -->
  <line x1="70" y1="62" x2="630" y2="62" stroke="#6b6b80" stroke-width="1.5" stroke-dasharray="5 5"/>
  <text x="70" y="48" fill="#9a9aad" font-size="13" font-family="monospace">excellent — the ceiling (unchanged)</text>

  <!-- BEFORE -->
  <rect x="120" y="252" width="150" height="40" rx="4" fill="#23232e"/>
  <text x="195" y="278" fill="#9a9aad" font-size="12" text-anchor="middle" font-family="monospace">where you start</text>
  <line x1="195" y1="248" x2="195" y2="74" stroke="#6b6b80" stroke-width="1.2" marker-end="url(#arr)"/>
  <text x="205" y="165" fill="#6b6b80" font-size="12" font-family="monospace">the climb</text>
  <text x="195" y="316" fill="#e8e8ef" font-size="14" text-anchor="middle" font-weight="600">Before</text>

  <!-- WITH AI -->
  <rect x="430" y="252" width="150" height="40" rx="4" fill="#23232e"/>
  <rect x="430" y="140" width="150" height="113" rx="4" fill="url(#rise)" opacity="0.92"/>
  <text x="505" y="130" fill="#e8e8ef" font-size="12" text-anchor="middle" font-family="monospace">average, instantly</text>
  <line x1="505" y1="134" x2="505" y2="74" stroke="#6b6b80" stroke-width="1.2" marker-end="url(#arr)"/>
  <text x="516" y="106" fill="#4cc9f0" font-size="12" font-family="monospace">← your job now</text>
  <text x="505" y="316" fill="#e8e8ef" font-size="14" text-anchor="middle" font-weight="600">With AI</text>
</svg>
<div class="diagram-caption">fig. 2 — the floor came up. the ceiling didn't move.</div>
</div>

This is also where those software engineering principles come back — not as relics, but as the thing that now matters most. That scanner that came together in an evening runs once, beautifully, while I'm watching. Getting it to run unattended at 3am, when the API goes down or a data source silently changes its format, when a race condition only shows up under load — that's still craft. AI writes code that runs. It does not reliably write code that's correct, secure, maintainable, and architected to survive contact with reality. The principles didn't become worthless when the typing got cheap. They became the difference between a demo and something you can actually depend on. That gap is wider than the hype admits, and it's made almost entirely of the engineering judgment AI hands back to you.

There's a third thing, too: distribution. When everyone can ship, shipping stops being the differentiator. If building a thing drops to near zero for you, it drops to near zero for everyone with the same spark. The moat was never the code, and it was rarely even the idea. It's whether anyone cares, whether they can find you, whether they trust the thing enough to depend on it. That was always true. AI just made it impossible to hide from.

## How to actually work now

If the wall is down, the move is obvious and most people still don't make it: bias hard toward the prototype. Stop debating ideas in the abstract. Build the ugly version and look at it. The cost of being wrong is now an afternoon, and an afternoon of being wrong teaches you more than a week of being theoretically right.

Then spend your newly-freed time where it now matters. The hours you're no longer pouring into boilerplate should go into the things AI didn't make cheap: figuring out which spark is actually worth building, applying the engineering principles that turn "works in the demo" into "works when I'm asleep," and dragging the thing from average — where AI left it — up toward excellent, where it has to earn its place.

The wall between an idea and a shipped thing is rubble now, and nobody should miss it. But don't mistake the open ground for the finish line. The wall was never the hard part — it just stood in front of the hard part and let us pretend otherwise. Now there's nothing between you and the real work: deciding what deserves to exist, making it correct, making it durable, making it matter.

AI will carry any idea to average at breathtaking speed, and it will carry your competitors' ideas there just as fast. Everything past that point — the correctness, the excellence, the reasons anyone should care — still has to be climbed by hand.

The gap between having an idea and shipping something is gone. The gap between shipping something and shipping something excellent is still the whole game. And for the first time, there's no wall left to blame.
