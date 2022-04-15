import { ICandidate, IGovernor } from '../../types/business';
import candidataImg from '../../static/images/candidate.png';
import { useRouter } from 'next/router';
interface PropType {
  candidate: IGovernor;
  section?: string;
}

export function CandidateBadge(props: PropType) {
  const candidate = props.candidate;
  const router = useRouter();
  const onClickCandidate = (id: number | null) => {
    if (!id) {
      return;
    }
    router.push(`/${id}`);
  };

  return (
    <div
      className={`h-full max-w-[250px] w-[43vw] md:w-[15vw] m-auto hover:cursor-pointer`}
      onClick={() => onClickCandidate(candidate.id)}
    >
      {/* eslint-disable */}
      <img
        src={candidate.profile_pic || candidataImg.src}
        alt="candidate"
        className={`w-[43vw] h-[43vw] md:w-[15vw] md:h-[15vw] max-w-[250px] max-h-[250px] hover:border border-white`}
      />
      <div className="flex text-white mt-[10px]">
        <div className="font-heading font-semibold text-[21pt] md:text-[27pt] mr-[10px]">
          {candidate.number}
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-heading font-semibold text-[11pt] md:text-[14pt]">
            {candidate.name}
          </p>
          <p className="font-body text-[11pt] md:text-[12pt] text-[#ffffff80]">
            {candidate.party}
          </p>
        </div>
      </div>
    </div>
  );
}