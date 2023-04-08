import { FC } from 'react';
//
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { aboutStyles } from '@/styles/aboutStyles';

const AboutUs: FC = () => {
  return (
    <ContentWrapper>
      <div className={aboutStyles.wrapper}>
        <h3 className={aboutStyles.title}>Ласкаво просимо!</h3>
        <p className={aboutStyles.text}>
          <span className='ml-[15px] font-bold'>JC-Global</span> - це міжнародна
          компанія, яка надає широкий спектр послуг у сфері продажів. Ми
          спеціалізуємося на різних напрямках, таких як продажі товарів
          споживчого та промислового призначення, продажі послуг, а також
          продажі інноваційних технологій.
        </p>
        <img
          className={aboutStyles.img}
          src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='test-img'
        />
        <p className={aboutStyles.text}>
          <span className='ml-[15px]' />
          Крім того, ми активно працюємо над створенням екологічно чистих та
          стійких продуктів, які будуть корисні як для споживачів, так і для
          нашої планети. Ми прагнемо бути найкращими в нашій галузі та
          продовжуємо поліпшувати наші послуги та процеси, щоб забезпечити нашим
          клієнтам високоякісний сервіс. Ми готові допомогти вам досягти ваших
          бізнес-цілей та підняти ваш бізнес на новий рівень.
        </p>
        <img
          className={aboutStyles.img}
          src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='test-img'
        />
        <p className={aboutStyles.text}>
          <span className='ml-[15px]' />
          Ми пишаємося нашими висококваліфікованими співробітниками, які
          працюють у команді для досягнення спільних цілей. Наша компанія
          постійно розвивається та прагне до інновацій, щоб задовольнити потреби
          наших клієнтів.
        </p>

        <img
          className={aboutStyles.img}
          src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          alt='test-img'
        />
        <p className={aboutStyles.text}>
          <span className='ml-[15px]' />
          Приєднуйтесь до нас і станьте частиною нашої команди, яка прагне до
          успіху та постійного зростання. Ми готові працювати разом з вами для
          досягнення кращих результатів та створення більш сприятливого
          майбутнього для всіх нас.
        </p>
        <button className={aboutStyles.btnJoin}>Приєднуйтесь</button>
      </div>
    </ContentWrapper>
  );
};

export default AboutUs;
