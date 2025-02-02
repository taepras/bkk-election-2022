import { Preset } from '../contexts/preset';
import { CandidateMap } from '../models/candidate';
import { ElectionData, ElectionIndex } from '../models/election';

export async function fetchPreset({
	shortname,
	fullname,
	electionDataUrl,
	candidateDataUrl
}: ElectionIndex): Promise<Preset> {
	const [electionData, candidateMap] = await Promise.all([
		getJson<ElectionData>(electionDataUrl),
		getJson<CandidateMap>(candidateDataUrl)
	]);

	return {
		shortname,
		fullname,
		electionData,
		candidateMap
	};
}

async function getJson<T>(url: string): Promise<T> {
	const response = await fetch(url);
	return response.json();
}
