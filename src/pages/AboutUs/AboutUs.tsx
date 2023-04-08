import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';

const AboutUs: FC = () => {
  return (
    <ContentWrapper>
      <div className='w-full bg-white  p-[20px] rounded-[8px] shadow-md'>
        <h3 className='text-l leading-l font-semibold text-center mb-[10px]'>
          Добро пожаловать
        </h3>
        <p className='text-m leading-m font-medium mb-[20px] text-center'>
          <span className='ml-[15px] font-bold'>JC-Global</span> - это
          международная компания, которая предоставляет широкий спектр услуг в
          сфере продаж. Мы специализируемся на различных направлениях, таких как
          продажи товаров потребительского и промышленного назначения, продажи
          услуг, а также продажи инновационных технологий.
        </p>
        <img
          className='w-full object-center  object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)] mb-[20px] rounded-[10px] '
          src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='test-img'
        />
        <p className='text-m leading-m font-medium mb-[20px] '>
          <span className='ml-[15px]' />
          Кроме того, мы активно работаем над созданием экологически чистых и
          устойчивых продуктов, которые будут полезны как для потребителей, так
          и для нашей планеты. Мы стараемся быть лучшими в своей отрасли и
          продолжаем улучшать наши услуги и процессы, чтобы обеспечить нашим
          клиентам высококачественный сервис. Мы готовы помочь вам достичь ваших
          бизнес-целей и привести ваш бизнес на новый уровень.
        </p>
        <img
          className='w-full object-center  object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)] mb-[20px] rounded-[10px] '
          src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='test-img'
        />
        <p className='text-m leading-m font-medium mb-[20px] '>
          <span className='ml-[15px]' />
          Мы гордимся нашими высококвалифицированными сотрудниками, которые
          работают в команде для достижения общих целей. Наша компания постоянно
          развивается и стремится к инновациям, чтобы удовлетворить потребности
          наших клиентов.
        </p>

        <img
          className='w-full object-center  object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,1)] mb-[20px] rounded-[10px] '
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          alt='test-img'
        />
        <p className='text-m leading-m font-medium mb-[20px] '>
          <span className='ml-[15px]' />
          Присоединяйтесь к нам и станьте частью нашей команды, которая
          стремится к успеху и постоянному росту. Мы готовы работать вместе с
          вами для достижения лучших результатов и создания более благоприятной
          будущей для всех нас.
        </p>
        <button className='w-full text-classic leading-classic bg-darkBlue text-white font-semibold p-[10px] rounded-[6px] shadow-md hover:bg-goalBlue transition-all duration-200 '>
          Присоединяйтесь
        </button>
      </div>
    </ContentWrapper>
  );
};

export default AboutUs;
