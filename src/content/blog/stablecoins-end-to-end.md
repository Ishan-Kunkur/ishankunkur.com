---
title: "Stablecoins, End to End: How Digital Dollars Are Made, Trusted, and Spent by Machines"
description: "What stablecoins are, how they are minted, burned, and validated, why they matter, and how AI agents are turning them into the settlement layer for machine commerce."
date: 2026-07-10
tags: ["Stablecoins", "Payments", "Fintech", "Agentic Commerce", "Explainer"]
readingTime: "11 min read"
cover: "/blog/stablecoins/stablecoin-cover.png"
coverAlt: "Stablecoins, end to end: how digital dollars are made, trusted, and about to be spent by machines."
draft: false
---


There are two true statements about stablecoins that seem to contradict each other.

The first: stablecoins are one of the largest things that has ever happened to digital money. Roughly **$315 billion** sits in circulation as of mid-2026, and a single issuer, Circle, moved **$21.5 trillion** of USDC on-chain in one quarter alone.

The second: almost nobody uses them to buy anything. By the European Central Bank's own estimate, something like **half a percent** of stablecoin volume is organic, retail-sized payment activity. The rest is trading, DeFi, and institutions shuffling dollars between ledgers.

Hold both of those in your head and the whole space snaps into focus. Stablecoins today are financial *plumbing*, not a consumer *wallet*. The interesting question is not whether that plumbing is real, it obviously is, but what finally starts pushing everyday value through it. The most credible answer right now is not humans. It's software.

This post walks the full loop: what a stablecoin is, how one is created and destroyed, how you actually verify it's backed, why it matters, and why the arrival of autonomous AI agents may be the thing that turns a settlement network into an economy.

---

## 1. What a stablecoin actually is

A stablecoin is a token that tries to be worth exactly one unit of something stable, almost always one US dollar. That's the goal. *How* a given coin tries to hit that goal is the entire story, because the mechanism you choose is the risk you inherit.

There are four families, and they are not created equal.

![The four families of stablecoin: fiat-collateralized, crypto-collateralized, synthetic delta-neutral, and algorithmic](/blog/stablecoins/stablecoin-taxonomy.png)

**Fiat-collateralized** coins are the boring, dominant kind: for every token in existence, the issuer holds about a dollar of cash and short-dated US Treasury bills in a bank. USDT, USDC, PYUSD and RLUSD live here, and together this family is well over 90% of all supply. Your risk is not the technology. Your risk is whether the reserves are real and whether the issuer stays solvent.

**Crypto-collateralized** coins like DAI and Sky's USDS don't touch a bank. Users lock up *more* crypto than the dollars they mint, often 150% or more, inside smart contracts. It's transparent and permissionless, but capital-inefficient, and a sharp drop in the collateral can trigger cascading liquidations.

**Synthetic, delta-neutral** coins are the clever new entrant. Ethena's USDe holds spot crypto and simultaneously shorts an equal amount of futures, so the two positions cancel out and the net value stays flat, while the position earns staking rewards and funding. It has grown fast. It also inherits a dependency on derivatives markets that a T-bill simply doesn't have.

**Algorithmic** coins tried to hold the peg with no hard backing at all, expanding and contracting a sister token to defend the price. This is the family that produced Terra's UST and its roughly $40 billion implosion in 2022. It is, for practical purposes, dead, and it is explicitly excluded from both the US GENIUS Act and Europe's MiCA.

Everything below is really about family one, because that's what "stablecoin" now means to regulators, banks, and the machines we'll get to at the end.

---

## 2 & 3. How they're created, and the full lifecycle

Minting a stablecoin is less exotic than it sounds. It's a warehouse receipt with better distribution.

![The complete lifecycle of a fiat-backed stablecoin from deposit and mint through circulation to redemption and burn](/blog/stablecoins/stablecoin-lifecycle.png)

Walk the loop:

1. **You deposit.** A user, a bank, or a payment provider sends real dollars to the issuer. In practice most minting happens at the wholesale level through a small set of authorized partners, not one retail user at a time.
2. **Reserves are parked.** That dollar goes into cash and short-dated Treasuries, held separately from the issuer's own operating money. Under current US rules those reserves must match outstanding tokens 1:1 and can't be lent out or reused.
3. **The token is minted.** A smart contract creates exactly one new token and sends it to a wallet. Supply on-chain has now grown by one, and you can watch it happen in real time.
4. **It circulates.** This is where the token does its job: settling payments, sitting as collateral in lending markets, forming the base trading pair on exchanges, moving across borders. The same dollar can change hands thousands of times here, and *circulating supply never moves* until someone leaves.
5. **Redemption and burn.** When a holder wants out, they hand the token back to the issuer. The contract destroys it, supply falls by one, and a dollar leaves the reserve and returns to the holder. Backing and supply stay locked together.

That is the complete lifecycle, and it's genuinely a loop: dollars in, token out, token back, dollars out. Nothing is created from nothing. The issuer's job is to make sure the two sides never drift apart.

Two details most explainers skip.

**Collateral is not static, it's managed.** The reserve isn't a vault of frozen cash. Issuers actively roll Treasury bills, hold cash for redemptions, and, on the interest earned, run one of the most profitable businesses in finance. When you hold a stablecoin, you're handing the issuer an interest-free loan and letting them keep the yield. That is not a bug in their business model; it *is* the business model.

**The compliance override is part of the design.** A regulated issuer can freeze, seize, or burn tokens sitting in any wallet, on a lawful order. Programmable money is also programmable control, and that cuts both ways: it's what makes sanctions enforcement and theft recovery possible, and it's the exact property that makes these coins the opposite of censorship-resistant.

### Why the price actually holds

The peg is not held up by faith or by the issuer "defending" it. It's held up by strangers trying to make free money.

![How arbitrage restores the peg when a stablecoin trades above or below one dollar](/blog/stablecoins/stablecoin-peg-arbitrage.png)

If the coin trades at $1.02, anyone can deposit $1 with the issuer, mint a fresh token, sell it for $1.02, and pocket two cents. That minting adds supply and pushes the price back down. If it trades at $0.98, anyone can buy it cheap, redeem it with the issuer for a full dollar, and pocket the difference, which burns supply and lifts the price back up. As long as mint-and-redeem-at-a-dollar stays open to arbitrageurs, gaps close on their own.

This is also precisely why algorithmic coins die. With no redeemable reserve underneath, there's no dollar floor for the arbitrage to lean on. When confidence breaks, the "peg defense" mechanism just accelerates the fall.

---

## 4. How you actually validate one

Here is the uncomfortable truth of the whole category: a stablecoin is half public and half private, and the private half is the part that matters most.

![Validating a stablecoin means reconciling on-chain supply against off-chain reserves through attestation, audit, and monitoring](/blog/stablecoins/stablecoin-trust-stack.png)

Everything *on-chain* is verifiable by anyone in seconds: total supply, every mint and burn, every transfer, the contract code, the freeze list. But the *reserves* that are supposed to back all of it, the cash in banks, the Treasuries at a custodian, the ability to actually pay you back, live off-chain, where you can't see them directly. You get a report about them.

So validation is really one question asked over and over: **does the sum of tokens on-chain still equal the dollars in reserve off-chain?** Four mechanisms try to answer it:

- **Monthly attestations.** A registered accounting firm reports what's in the reserve, and under the GENIUS Act the CEO and CFO have to personally certify it. Note the word: *attestation*, not *audit*. It's a snapshot check against stated criteria, not a full examination of the business.
- **Annual audits.** Once an issuer crosses $50 billion outstanding, a full PCAOB-standard financial-statement audit kicks in. Far stronger, far less frequent.
- **Proof-of-reserves.** Live or near-live feeds that tie on-chain supply to reserve balances, so you're not waiting a month to notice a gap.
- **Independent monitoring.** Third-party observability watching for peg deviation, reserve drift, unusual mint/burn patterns, and freeze events as they happen.

That last layer is the one the industry under-invests in and will regret under-investing in. Attestation tells you the reserves looked fine on the last day of the month. It tells you nothing about the twenty-nine days in between, when supply changes every block. The gap between "attested monthly" and "verified continuously" is exactly where the next stablecoin failure will hide.

The **GENIUS Act**, signed in July 2025 and phasing in through early 2027, is the first US law to put real structure around all of this. In short: full 1:1 reserves in cash and short-dated Treasuries, no rehypothecation, monthly attestation with executive sign-off, priority for coin-holders if the issuer goes bankrupt, full anti-money-laundering obligations, and, critically, a ban on issuers paying interest to holders. It also draws a hard line: only licensed "permitted payment stablecoin issuers", essentially banks and vetted specialists, may issue. Europe's MiCA and Japan's Payment Services Act reach similar places by different routes. The regulatory era has arrived.

---

## 5. Why any of this matters

Strip away the noise and stablecoins matter for a few concrete, non-hypey reasons.

![The stablecoin market in one picture: a two-name market moving trillions, but barely used for consumer payments](/blog/stablecoins/stablecoin-market-reality.png)

**They already move serious value.** Annual stablecoin transfer volume now runs in the tens of trillions of dollars, in the same league as the big card networks. Even after you strip out bots and internal shuffling, real payment volume is estimated around $390 billion a year, with B2B alone near $226 billion.

**They're a dollar-distribution machine.** Because reserves sit largely in Treasury bills, every dollar of stablecoin demand is a dollar of demand for US government debt. That's why the US position on stablecoins flipped from suspicion to active endorsement: they export dollar dominance to anyone with a phone, without a US bank account in sight.

**They work where banking doesn't.** The single biggest real-world use is unglamorous: people in high-inflation and hard-to-bank economies holding digital dollars, mostly USDT on Tron, because it's the cheapest way to touch a stable currency. Ethereum and Tron together carry close to 90% of all supply, and Tron's slice is almost entirely dollar remittance rails operating outside the US banking perimeter.

But look again at that picture. This is a **two-name market**: USDT and USDC are about 83% of everything, and a concentration that heavy is itself a systemic risk. It's a market where *velocity*, not supply, is the real story. And it's a market that, for all its size, is barely used for the one thing money is supposed to do, buy stuff.

That gap between plumbing and payments has been stuck open for years. Something has to push value through it. Which brings us to the machines.

---

## 6. The part everyone's actually betting on: agentic commerce

Here's the thesis in one line: **stablecoins may never win human checkout, and it may not matter, because the next wave of buyers isn't human.**

AI agents, software that pursues a goal and acts on your behalf, break every assumption card networks were built on. They transact in fractions of a cent, where a fixed interchange fee is fatal. They run 24/7 across time zones, where a Sunday-night card authorization waits until Tuesday to clear. They fire thousands of tiny payments per task, per API call, per outcome. Card rails simply can't price or settle that. Stablecoins can.

The connective tissue is a small, revived piece of the web: **HTTP 402, "Payment Required."**

![The x402 payment flow: an agent hits a paywalled API, pays a stablecoin micropayment, and gets its data in one round trip](/blog/stablecoins/stablecoin-agentic-x402.png)

Coinbase's **x402** protocol turns that dormant status code into a real paywall for machines. An agent requests a resource, the server replies "402, pay me $0.002 of USDC on Base at this address," the agent signs the payment inside its own spending limits, a facilitator settles it on-chain and sponsors the gas, and the agent retries and gets its data. The whole cycle takes seconds and needs no account, no card, and no human in the loop.

And this is no longer a fringe experiment. The list of names standing behind agentic payment standards is the establishment itself: x402 is now stewarded by the Linux Foundation with backing from Coinbase, Cloudflare, Stripe, Google, Microsoft, AWS, Circle, Visa, and Mastercard. Google's **AP2** pulled in 60-plus partners including PayPal, Mastercard, and American Express. **Mastercard** launched Agent Pay for Machines in mid-2026; **Visa** has Intelligent Commerce. Every one of these specs assumes a stablecoin settlement layer underneath.

Now the honest part, because the honest part is the whole point.

**The rails are real. The demand is not, yet.** Through 2026, on-chain analysts have repeatedly flagged that a large share of x402's activity, tens of millions of "transactions" and tens of millions in cumulative volume, is tests, self-dealing loops, and gamified minting, not genuine commerce. Real daily volume has at times been measured in the *tens of thousands* of dollars. The average payment sits around thirty cents. As one analyst put it, we'll overestimate how fast this arrives in the next year and badly underestimate what it becomes in five.

That's the correct way to hold it. Agentic commerce today looks a lot like e-commerce in 1996: the protocol works, the money moves, and the volume is a rounding error. The teams that win won't be the ones with the flashiest agent demo. They'll be the ones who treat this as payments engineering: clean authorization, hard spending limits, programmable wallet controls, and, above all, **audit-grade observability**, because an autonomous system spending money with no human reviewing each transaction is a system you had better be able to watch, reconstruct, and shut off.

---

## What most explainers leave out

A few things that rarely make the "intro to stablecoins" article but decide who survives the next cycle:

- **Depegs are not theoretical.** USDC broke to about $0.87 for a weekend in March 2023 when part of its reserve was trapped in the collapsing Silicon Valley Bank. It recovered only once deposits were guaranteed. The lesson isn't "stablecoins are fragile," it's "your stablecoin is exactly as safe as the least safe bank holding its reserve."
- **The yield fight is the real political battle.** The GENIUS Act bans *issuers* from paying you interest, which pushes the yield to exchanges and distributors through side doors, and has banks lobbying hard to close the loophole. Who gets to pay yield on a digital dollar is a multi-hundred-billion-dollar question hiding inside a boring statute.
- **Concentration is the systemic risk.** A two-issuer, two-chain market is efficient right up until one of those four points of failure has a bad day. Diversification gets discussed far more than it actually happens.
- **"Programmable" cuts both ways.** The same freeze-and-burn capability that recovers stolen funds and enforces sanctions is a permanent, wallet-level kill switch. That's a feature to regulators and a liability to anyone who thought they were holding censorship-resistant money.
- **Observability is the missing layer.** On-chain data is transparent; off-chain reserves are attested monthly; agentic payments are autonomous and irreversible. The connective tissue that watches all three in real time barely exists yet. That's not a footnote. In an agent-driven economy, monitoring stops being back-office hygiene and becomes core infrastructure.

---

## The takeaway

Stablecoins are a solved technical problem and an unsolved economic one. The mechanics, mint, back, circulate, redeem, burn, are elegant and, at this point, boring. The reserves work. The peg holds because arbitrage makes it hold. The regulation has landed.

What's unsettled is *what they're for*. For years the answer was "trading and moving dollars around," which is real but narrow. The bet now, backed by essentially every large payments and technology company at once, is that the killer user was never going to be a person deciding to pay in crypto at checkout. It was going to be a piece of software paying another piece of software, a fraction of a cent at a time, at the speed of the internet.

If that bet pays off, the quiet dollar-plumbing of the 2020s becomes the settlement layer of the machine economy. And the winners won't be whoever shouts "agentic" the loudest. They'll be whoever makes machine money **trustworthy**: backed, verifiable, and watched.

*The rails are laid. Now we find out if anything real runs on them.*
