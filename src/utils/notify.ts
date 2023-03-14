import { Report } from 'notiflix/build/notiflix-report-aio';

const report = () => {
  Report.info(
    'Попередження',
    'Намагаєшся контакт добавити ти, присутній у книзі контактів вже.',
    'Okay'
  );
};

export default report;
