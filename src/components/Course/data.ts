import { Colors } from '../../constants';
import { Lego, Microphone } from '../../svg/Course';

export type CourseType = {
  title: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color: string;
};

const courseData: CourseType[] = [
  {
    title: 'Building Your Personal Brand',
    Icon: Lego,
    color: Colors.teal,
  },
  {
    title: 'Public Speaking Masterclass',
    Icon: Microphone,
    color: Colors.red,
  },
];

export default courseData;
