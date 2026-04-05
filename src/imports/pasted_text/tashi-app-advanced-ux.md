Prompt 2 of 2
Mobile App Design for Tashi Blockchain: Swarm Control, Mission Execution, Governance, and Advanced UX
Use this second prompt in Figma Make after Prompt 1.
This is the second half of the full design spec and should extend the app into more advanced interactions. Focus on swarm coordination, mission execution, governance, event-driven alerts, real-time operational views, and advanced mobile workflows. The app should now feel like a complete blockchain-native mobile mission control platform where the user can not only manage assets, but also participate in and oversee active swarm behavior.
The second half should be more operational, more technical, and more dynamic than the first. It should assume the user already has basic wallet, identity, and home dashboard screens from Prompt 1, and now it should introduce advanced screens that make Tashi blockchain feel alive, responsive, and mission-critical. The app should feel powerful but still mobile-friendly, with excellent information architecture and a very intuitive control flow.

Product Expansion Goal
This second prompt extends the mobile app into a serious operational layer. The user should be able to:
observe swarm missions,
assign roles,
inspect agent health,
monitor tasks,
respond to emergency events,
view governance proposals,
approve or reject decisions,
analyze activity history,
and manage complex coordination states from mobile.
The design should communicate that Tashi blockchain is not just a token system; it is a live coordination substrate for decentralized physical and digital operations.

Screen 10: Swarm Mission Control
Create a premium mission-control style screen that shows a live swarm operation.
Required elements:
Mission title and ID.
Mission objective.
Progress indicator.
Active agents count.
Agent health summary.
Task list.
Live map or radar visualization.
Current mission phase.
A contextual action button.
Mission states:
Exploring
Detecting
Relaying
Converging
Extracting
Retreating
Recovering
UI design direction:
Make this screen feel like a compact version of an air traffic control dashboard adapted for mobile. Use a map card or radar card at the top, then stack mission state cards underneath. Keep the overall layout scrollable and card-based.
Suggested components:
mission header card,
live status ring,
agent role chips,
“last event” banner,
mission timeline,
emergency override button,
notes or mission instructions drawer.
The mission control screen should make the system feel real and operational. Every element should feel connected to live mission state.

Screen 11: Agent Detail View
Design a detailed mobile view for a single agent in the swarm. This should open when the user taps a specific drone or rover in mission control.
Include:
Agent name / ID.
Role.
Battery.
Temperature.
Signal quality.
Current task.
Last heartbeat.
Stake or trust value.
Position or region.
Recent actions.
Add visual elements:
circular health meter,
signal bars,
battery gauge,
status chips,
action list,
relation to nearby agents,
small history timeline.
UX behavior:
The user should be able to:
rename the agent,
reassign role,
ping the agent,
mute alerts,
mark as critical,
and review telemetry.
Keep the screen clean but dense enough to satisfy technical users.

Screen 12: Agent Fleet Grid
Create a mobile-friendly fleet overview that shows all active agents.
The fleet screen should support:
grid or list toggles,
filters by role,
filters by status,
search,
sorting by battery or priority,
color-coded states,
quick access to each agent detail.
Fleet data should include:
online,
relaying,
exploring,
failed,
blocked,
retreating,
recovered,
standby.
Make it easy to scan the fleet visually. Use compact agent cards or tiles. Each card should show:
avatar/icon,
role,
battery,
signal,
current task,
small live status indicator.
This screen should feel like a highly usable systems administration interface optimized for touch.

Screen 13: Governance / Voting / Proposal Screen
Since the user asked for Tashi blockchain integration, governance should be a core mobile feature.
This screen should include:
active proposals,
proposal title,
proposal summary,
vote status,
stake-weighted influence,
countdown timer,
yes/no/abstain options,
voting power indicator.
Suggested blocks:
Featured proposal card.
Proposal list with status.
Voting detail sheet.
Outcome prediction or quorum progress.
History of past votes.
Design direction:
Make the governance system feel serious and transparent. Use visual indicators for:
quorum progress,
stake weight,
participation,
proposal state,
outcome confidence.
If appropriate, use a compact chart or horizontal progress bar for vote distribution.

Screen 14: Emergency Override / Safety Panel
Create a highly visible emergency control screen or bottom sheet for safety-critical actions.
Include:
emergency retreat button,
emergency hold position button,
cancel mission button,
broadcast message control,
confirmation flow,
current risk warning,
active threat summary.
UX principles:
This screen should feel dramatic, but still controlled and professional. The emergency action must be visually distinct and impossible to confuse with routine actions. Use strong warning colors, but do not make it look chaotic. The user should feel in control.
States to design:
idle,
warning detected,
confirmation step,
active override,
mission resetting,
safe mode.
Include secondary text explaining the consequence of each action.

Screen 15: Mission History / Replay Timeline
Create a mission history screen for reviewing prior actions and swarm behavior.
Include:
chronological event timeline,
mission outcomes,
agent failures,
victim detections,
relay changes,
governance votes,
handoffs,
success/failure status.
Design elements:
timeline cards,
expandable events,
timestamps,
filter by event type,
export/share buttons,
replay scrubber if feasible.
This screen should help the user understand what happened and provide a kind of post-mission audit log.

Screen 16: Analytics / Performance Dashboard
Create a mobile analytics screen that gives a high-level view of system performance.
Metrics to show:
mission success rate,
consensus latency,
detection accuracy,
battery efficiency,
agent uptime,
role reassignment count,
task completion time,
network reliability.
Visual widgets:
line charts,
small bar charts,
donut charts,
trend cards,
comparison widgets,
percentile summaries.
Make the analytics screen feel very polished. Keep charts compact and mobile-friendly. Use clear labels and readable color coding.

Screen 17: Connectivity / Network Health Screen
Because Tashi blockchain depends on network state, create a network view that helps the user understand connectivity and mesh health.
Include:
local node status,
peer count,
sync state,
block or message latency,
offline queue,
packet loss estimate,
relay chain health,
mesh topology snapshot.
Visual approach:
Use a network graph, status rings, or node map. Make the screen feel technical, but still easy to understand at a glance.
Show states such as:
fully synced,
degraded,
isolated,
reconnecting,
stale,
recovered.
This screen is especially important for mobile environments with unreliable connectivity.

Screen 18: Task Assignment / Mission Planning
Design a mobile mission planning screen where the user can create or modify a swarm task.
Include:
task name,
task objective,
target region,
required roles,
urgency level,
stake threshold,
required assets,
expected completion time,
save and deploy buttons.
Interaction ideas:
sliders for urgency,
chips for role selection,
map pin or target marker,
modular task builder,
preview state before deploy.
The planning flow should feel like a mission composer. The user should be able to quickly define a task and deploy it to the swarm.

Screen 19: Search and Rescue Scenario Selector
Create a scenario selection screen that lets the user switch between modes or mission templates.
Include:
cards for different scenarios,
short descriptions,
difficulty labels,
expected swarm size,
success criteria,
preview thumbnails,
“launch” or “simulate” button.
Suggested scenario cards:
Dynamic relay chain
Victim priority reallocation
Battery cascade recovery
Circular obstacle bypass
Flash consensus retreat
Thermal emergency rebalance
Collapsing tunnel rescue
Multi-swarm handoff
Warehouse restocking
Predator evasion
Random failure resilience
This screen should make the product feel like a platform, not just a single workflow.

Screen 20: Advanced Profile / Developer Mode
Create a more advanced profile or settings area for technical users.
Include:
network configuration,
chain settings,
staking preferences,
RPC or node selection,
debug mode toggles,
telemetry controls,
logs access,
simulation mode,
hardware connection options.
This section should feel powerful and pro-grade. It should support advanced users without confusing regular users. Consider collapsing advanced items into expandable groups.

Screen 21: Mobile Command Sheet / Universal Search
Design a universal command sheet that can be opened from anywhere in the app.
Features:
quick search for missions, agents, events, and transactions,
command shortcuts,
recent actions,
suggested next steps,
quick jumps to screens,
alert search,
wallet actions.
This is the “power user” feature. Make it feel like a command launcher with excellent mobile ergonomics.

Screen 22: Empty States, Loading States, and Error States
A strong mobile product needs thoughtful empty and error states.
Design these:
no mission active,
no agents connected,
no wallet assets,
no proposals found,
network offline,
sync delayed,
failed transaction,
empty notification inbox.
Style guidance:
Keep empty states helpful, not blank. Add:
clear explanation,
next step CTA,
contextual icon,
subtle illustration,
reassuring text.
Error states should be calm and actionable, not alarming. Always give the user an obvious next step.

Interaction and Motion Guidelines
Motion is important across the whole mobile app, but it should always serve understanding.
Use motion for:
screen transitions,
status changes,
incoming alerts,
map updates,
agent activity,
vote progression,
mission progress,
emergency activation.
Avoid:
excessive bouncing,
distracting parallax,
unnecessary animation loops,
overly flashy crypto visuals.
The app should feel modern and alive without becoming visually noisy.

Mobile UX Principles
Keep the following rules consistent across every screen:
Always show the most important state first.
Make actions clear and immediate.
Use icon + label combinations for navigation.
Keep critical controls in thumb reach.
Prefer cards over dense tables.
Use expandable detail when needed.
Reveal technical depth progressively.
Make every screen usable in one hand.
Use bottom sheets for contextual details.
Never force the user to hunt for status.

Design Language Summary
The second prompt should continue the same design language as the first prompt:
dark mode first,
premium blockchain aesthetic,
futuristic mission-control vibe,
vivid accent colors,
glass cards,
clear hierarchy,
native mobile comfort,
high trust and technical confidence.
The user should feel that this mobile app is a serious operational tool for Tashi blockchain.

Final Output Expectations for Figma Make
Figma Make should generate:
a full mobile design system,
multiple connected mobile screens,
reusable card and sheet components,
wallet / mission / governance / analytics flows,
stateful UI concepts,
mobile-native interactions,
polished visual hierarchy,
and a cohesive Tashi blockchain product identity.
The final result should feel like a best-in-class blockchain mobile app that can support both everyday users and highly technical operators.


