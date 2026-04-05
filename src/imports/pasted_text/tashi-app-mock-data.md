Figma Make Prompt: Add Mock Data for 3 Scenarios
Design a mobile-first Tashi blockchain app with three fully populated scenario demos using realistic mock data. The app should feel like a polished production product, not a placeholder prototype. The purpose of the mock data is to make the UI instantly demoable, with believable values, believable user actions, and clear story-driven states. The three scenarios should each have their own mock data set, distinct UI behavior, and realistic content so that the app can be used in presentations, hackathons, investor demos, and usability testing.
The app should feel like a premium blockchain mobile command center. Use a dark, futuristic, highly legible design language with glass cards, gradient accents, smooth spacing, and a strong mobile hierarchy. The mock data should support the following three scenarios:
Wallet / Identity / Stake scenario
Swarm mission / agent coordination scenario
Search & Rescue operational scenario
Each scenario should have its own believable sample data, state changes, timestamps, progress indicators, notifications, and task objects. The goal is for the mobile prototype to look alive, real, and technically sophisticated.

Overall Mock Data Requirements
The mock data must be:
realistic,
internally consistent,
timestamped,
role-aware,
stateful,
and visually useful.
The mock data should not look random. It should feel like live operational data from a Tashi blockchain mobile product.
Data design rules:
Every screen should contain named entities, not anonymous placeholders.
Use realistic values for balances, stakes, agent counts, mission progress, confidence scores, and timestamps.
Include variation across statuses such as active, pending, completed, failed, warning, and synced.
Show changes over time so the UI can support activity feeds and timelines.
Include enough data to populate charts, cards, lists, and detailed modals.
Make the numbers believable for a blockchain and swarm system.
Add some complexity so the app feels real: multiple agents, multiple tasks, multiple notifications, multiple proposals, multiple wallet assets.
The data should be visually useful in a mobile layout. The UI must be able to show it in summary cards, expanded views, detail sheets, and feed items.

Scenario 1: Wallet / Identity / Stake Mock Data
This scenario should simulate a user managing their Tashi blockchain identity, wallet, and stake position from mobile.
Create the following mock data entities:
1. User profile
Include:
display name,
username,
wallet address,
identity badge,
trust score,
verified status,
active sessions,
last login time,
preferred network,
security level.
Example tone:
“Lucy Low”
“Verified Tashi Operator”
“Trust Score: 94%”
“Last login: 12 minutes ago”
2. Wallet balances
Create a portfolio-like balance card with:
total portfolio value,
TASHI token balance,
stablecoin balance,
governance token balance,
small reward balance,
locked stake amount,
available balance.
Use realistic but fictional values. Include price deltas for each token, such as:
+2.4%,
-0.8%,
+11.2%.
3. Transaction history
Include at least 8 transaction records with:
transaction type,
amount,
token,
status,
timestamp,
chain/network label,
transaction hash preview.
Example transaction types:
Stake deposited
Reward claimed
Governance vote cast
Transfer received
Mission reward unlocked
Emergency override fee
Identity verification
Wallet top-up
4. Stake summary
Create mock staking data with:
active stake,
locked stake,
reward rate,
validator or pool name,
next reward time,
historical earned rewards,
delegation status.
5. Security and identity data
Include:
biometrics enabled,
device bound status,
recovery backup status,
recent login devices,
risk alerts,
session expiration,
wallet protection level.
UI behavior for scenario 1:
The wallet screen should show:
a large balance card,
token list,
quick actions,
identity card,
stake summary,
transaction timeline,
security status.
Suggested mock values:
Total portfolio: 18,420.75 TASHI equivalent
Active stake: 12,000 TASHI
Available balance: 2,440.75 TASHI
Reward balance: 280.00 TASHI
Trust score: 94/100
Identity verified: Yes
Current session: Active on iPhone 15 Pro
Network: Tashi Mainnet Beta

Scenario 2: Swarm Mission / Agent Coordination Mock Data
This scenario should simulate a live multi-agent swarm mission on Tashi blockchain.
Create the following mock data entities:
1. Mission summary
Include:
mission name,
mission ID,
mission type,
objective,
start time,
current phase,
mission progress,
success probability,
total agents,
active agents.
Example mission names:
“Relay Chain Stabilization”
“Sector Sweep Alpha”
“Victim Trace Recovery”
“Warehouse Lane Recon”
2. Agent list
Create 8–12 swarm agents with:
agent ID,
role,
battery level,
temperature,
signal strength,
stake weight,
status,
current task,
location zone,
last heartbeat.
Example roles:
Explorer
Relay
Rescuer
Scout
Support
Leader
Standby
3. Live activity stream
Create recent swarm events such as:
role promoted,
relay gap detected,
victim candidate found,
handoff completed,
path rerouted,
battery threshold warning,
consensus reached,
mission phase updated.
4. Consensus / voting data
Include:
active proposal title,
vote counts,
stake-weighted influence,
quorum progress,
yes/no/abstain breakdown,
confidence score,
time remaining.
5. Network health data
Add:
peer count,
mesh sync status,
message latency,
packet loss,
relay chain integrity,
offline nodes,
recovery status.
UI behavior for scenario 2:
The mission screen should show:
a live mission map or radar panel,
agent status tiles,
a mission progress card,
event timeline,
voting / consensus module,
network health summary.
Suggested mock values:
Mission progress: 68%
Active agents: 9 / 10
Success probability: 91%
Consensus latency: 18 ms
Relay chain integrity: 97%
Average battery: 72%
Heat warnings: 1 moderate alert
Signal strength: strong overall
Example agent data:
Agent A-01: Leader, 82% battery, 39.1°C, strong signal, active
Agent A-02: Relay, 74% battery, 38.6°C, medium signal, relaying
Agent A-03: Explorer, 66% battery, 37.4°C, good signal, scanning
Agent A-04: Support, 58% battery, 40.2°C, warning state, partial lag
Agent A-05: Rescuer, 91% battery, 36.8°C, active, mission ready
Consensus example:
Proposal: “Shift swarm north corridor”
Yes: 63%
No: 27%
Abstain: 10%
Weighted approval: 71%
Quorum: 88%

Scenario 3: Search & Rescue Operational Mock Data
This scenario should simulate an active Search & Rescue operation with victims, hazards, rescues, and emergency coordination. This should be the most dramatic scenario in the app.
Create the following mock data entities:
1. Rescue mission summary
Include:
mission name,
incident ID,
location,
weather conditions,
mission stage,
number of victims detected,
number of victims confirmed,
number of agents deployed,
time since dispatch,
hazard level.
Example mission:
“Collapsed Tunnel Rescue – Sector 4”
“Incident ID: SAR-2048-113”
“Weather: low visibility, light smoke”
“Hazard level: high”
2. Victim cards
Create at least 4 victim entries with:
victim ID,
detection source,
confidence level,
priority,
condition status,
time detected,
estimated distance,
assigned agent,
extraction status.
Detection sources should include:
thermal camera,
visual camera,
motion sensor,
manual confirmation,
audio signature.
Use condition labels like:
critical,
stable,
trapped,
uncertain,
rescued.
3. Hazard data
Add nearby hazard records such as:
forklift nearby,
unstable wall,
blocked corridor,
thermal spike,
battery failure risk,
signal dropout zone.
4. Rescue task list
Include tasks such as:
scan zone,
confirm victim,
send relay agent,
reroute path,
dispatch rescuer,
prepare extraction,
retreat to safe zone,
update incident log.
5. Emergency / override data
Include:
emergency retreat status,
override available,
operator acknowledgement,
active threat level,
safety margin,
evacuation path readiness.
UI behavior for scenario 3:
The rescue screen should show:
incident banner,
victim priority cards,
hazard alert bar,
live task checklist,
extraction progress,
emergency controls.
Suggested mock values:
Victims detected: 4
Victims confirmed: 3
Critical victims: 1
Mission elapsed: 14m 22s
Hazard level: High
Path reroute events: 5
Extraction success rate: 87%
Example victim entries:
Victim V-01: thermal confirmed, critical, 93% confidence, 18m away, assigned to Rescuer-02
Victim V-02: visual + audio confirmed, stable, 88% confidence, 22m away, assigned to Scout-01
Victim V-03: motion detected, trapped, 79% confidence, 31m away, pending confirmation
Victim V-04: uncertain, 61% confidence, needs second pass
Example hazard entries:
Unstable wall at corridor C-12
Forklift obstacle at loading bay
Thermal hotspot near left passage
Signal dropout near lower tunnel
Debris field blocking west route

Shared Mock Data Design Requirements
All three scenarios should share a consistent style of mock data so the app feels like one product.
Include these common system-wide items:
notification feed,
recent activity feed,
status badges,
timestamps,
severity labels,
confirmation states,
loading states,
empty states,
error states,
action buttons,
detail sheets.
Make sure every scenario supports:
compact summary cards,
detailed drill-down views,
animated state changes,
mobile-friendly scrolling,
and a “last updated” timestamp.
Data realism rules:
Use relative times like “2 min ago” and absolute times like “14:32”.
Use a mix of percentages, token balances, confidence scores, and state labels.
Keep values believable and internally consistent.
Make each scenario visually distinct with different emphasis and colors.

Suggested Mobile Screen Structure
Create a mobile app with these screens:
Home Dashboard
Wallet
Swarm Mission
Search & Rescue
Notifications
Stake / Governance
Profile / Settings
Each of the three scenarios should appear as a distinct content mode or dashboard state inside the app. The user should be able to switch between them with a segmented control, bottom tab, or scenario selector.

Visual Presentation Rules
Use the following design language:
dark futuristic background,
glowing accent colors,
glass panels,
compact cards,
sharp but friendly icons,
smooth motion,
strong hierarchy,
premium mobile OS feel,
technical but readable data visualization.
The mock data should be displayed in a way that feels like a live product:
charts should have real values,
cards should have non-placeholder labels,
lists should have multiple entries,
status chips should change color based on state,
mission timelines should look active,
and the UI should feel populated, not empty.

Motion and Interaction Rules
The mock data should support interaction in the design:
tap on a card to expand details,
tap on an agent to open a drawer,
tap on a victim to view priority details,
tap on a transaction to see hash and confirmation,
swipe notifications left or right,
long press to show quick actions,
pull to refresh mission state.
The design should include:
loading placeholders,
active state highlights,
pulsing mission indicators,
animated progress rings,
live status dots,
and expandable drawers.

Final Figma Make Instruction
Generate a high-fidelity mobile prototype with realistic mock data for these 3 scenarios:
wallet / identity / stake,
swarm mission / agent coordination,
search & rescue operations.
The data must be rich enough to make the app feel like a live blockchain product. The final screens should be polished, credible, and presentation-ready. This mock data is not for testing only — it should make the app look like it is already running in the real world.



