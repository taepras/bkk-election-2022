import { useRouter } from 'next/router';
import { IAnswer } from '../../types/business';
import { getYoutubeId } from '../../utils/tranformation';

interface PropsType {
  answer: IAnswer;
}

export function AnswerStandardCard(props: PropsType) {
  const router = useRouter();
  const { answer } = props;
  const youtubeId = getYoutubeId(answer.url);
  const youtubeEmbedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : '';

  const onClickName = () => {
    router.push(`/${answer.nc_xeff__candidates_id}`);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[250px] md:max-w-[930px] items-center m-auto">
      <div className="flex-1">
        <a href={`/candidate/${answer.nc_xeff__candidates_id}`}>
          <p
            className="typo-h6 hover:cursor-pointer hover:underline"
            // onClick={() => onClickName()}
          >
            {answer.governorsRead.name}
          </p>
        </a>
        <p className="typo-b3 mt-[20px]">{answer.text}</p>
      </div>
      {youtubeEmbedUrl ? (
        <iframe
          className="w-[250px] md:w-[450px] h-[250px] md:h-[450px] md:ml-[30px] mt-[20px] md:mt-0"
          name={`question-${answer.nc_xeff__questions_id}-${Date.now()}`}
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-[250px] md:w-[450px] h-[250px] md:h-[450px] mb-[40px] typo-h3 text-white flex items-center justify-center">
          No Video
        </div>
      )}
    </div>
  );
}
