<script>
	import { AvatarGroup, Button, Checkbox, Input, Toast } from '#lib/index.js';

	let name = $state('');
	let email = $state('');
	let slides = $state(true);
	let registered = $state(false);

	const speakers = [
		{ name: 'Ada Lovelace' },
		{ name: 'Grace Hopper' },
		{ name: 'Alan Turing' }
	];
</script>

<section class="section">
	<div class="wrap split">
		<div class="copy">
			<p class="eyebrow">Live session · 14 November</p>
			<h1>One hue,<br />four surfaces.</h1>
			<p class="lead">
				Forty-five minutes on the colour engine behind this site: why two numbers beat a
				palette file, and what breaks when you add a third.
			</p>

			<div class="when">
				<div class="date" aria-hidden="true">
					<span class="day">14</span>
					<span class="month">Nov</span>
				</div>
				<div>
					<p class="when-title">Thursday, 18:00–18:45</p>
					<p class="when-note">CET · the replay goes to everyone registered</p>
				</div>
			</div>

			<div class="speakers">
				<AvatarGroup label="Speakers" people={speakers} size={44} />
				<p>Ada Lovelace and Grace Hopper, hosted by Alan Turing.</p>
			</div>
		</div>

		<div class="card form">
			<h3>Save a seat</h3>
			<p class="note">Free, five hundred seats, questions at the end.</p>

			<form
				class="fields"
				onsubmit={(event) => {
					event.preventDefault();
					registered = true;
				}}
			>
				<Input label="Name" bind:value={name} autocomplete="name" />
				<Input
					label="Email"
					type="email"
					bind:value={email}
					autocomplete="email"
					hint="The join link arrives the day before."
				/>
				<Checkbox label="Send me the slides afterwards" bind:checked={slides} />
				<Button type="submit">Register</Button>
			</form>

			<p class="fine">One reminder, no newsletter, unsubscribe in a click.</p>
		</div>
	</div>

	<Toast bind:open={registered} message="Seat saved. The join link is on its way." />
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		gap: clamp(32px, 5vw, 80px);
		align-items: center;
	}

	.eyebrow {
		color: var(--color-muted);
		font-size: 14px;
		font-weight: 600;
	}

	h1 {
		margin-top: 16px;
		font-size: clamp(40px, 5vw, 72px);
		font-weight: 600;
		line-height: 0.94;
		letter-spacing: -0.05em;
		text-wrap: balance;
	}

	.lead {
		margin-top: 22px;
		max-width: 44ch;
		color: var(--color-muted);
		font-size: 18px;
		line-height: 1.5;
		text-wrap: pretty;
	}

	.when {
		display: flex;
		align-items: center;
		gap: 18px;
		margin-top: clamp(28px, 3.4vw, 40px);
	}

	.date {
		display: grid;
		place-items: center;
		flex: none;
		width: 84px;
		padding-block: 12px;
		border-radius: 22px;
		background: var(--color-field);
		color: var(--color-field-ink);
	}

	.day {
		font-size: 34px;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.04em;
		font-variant-numeric: tabular-nums;
	}

	.month {
		margin-top: 2px;
		font-size: 13px;
		font-weight: 600;
		opacity: 0.8;
	}

	.when-title {
		font-size: 17px;
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	.when-note {
		margin-top: 4px;
		color: var(--color-muted);
		font-size: 14px;
	}

	.speakers {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px;
		margin-top: clamp(28px, 3.4vw, 40px);
	}

	.speakers p {
		max-width: 30ch;
		color: var(--color-muted);
		font-size: 15px;
		line-height: 1.4;
	}

	.form {
		display: grid;
		gap: 14px;
		padding: clamp(26px, 3vw, 40px);
	}

	.form > h3 {
		font-size: 24px;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.note {
		margin-top: -4px;
		max-width: 34ch;
		font-size: 15px;
		line-height: 1.45;
	}

	.fields {
		display: grid;
		gap: 16px;
		margin-top: 4px;
	}

	.fields :global(.btn) {
		justify-self: start;
		margin-top: 4px;
	}

	.fine {
		color: var(--color-muted);
		font-size: 14px;
	}

	@media (max-width: 900px) {
		.split {
			grid-template-columns: 1fr;
		}
	}
</style>
