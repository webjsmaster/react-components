import { Component } from 'react';
import { Layout } from '../../ui/layout/Layout';
import scss from './About.module.scss';

class About extends Component {
  render() {
    return (
      <Layout>
        <div className={scss.wrapper} data-testid="about-page">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur culpa, dolor est
            ipsa minus necessitatibus odio perferendis quaerat quibusdam? Ab fugit incidunt
            necessitatibus nemo pariatur quam quis sequi, tempora velit.
          </div>
          <div>
            Facere fuga id inventore, ipsa iste iure iusto labore magnam nisi nobis officiis placeat
            quidem quis quisquam reiciendis sapiente temporibus velit vero voluptatibus voluptatum.
            Aliquid asperiores consectetur enim impedit minima.
          </div>
          <div>
            Aliquam delectus doloremque dolorum ducimus ea eaque eos esse fugit in laboriosam
            laborum molestiae nam, placeat possimus quas quia quidem recusandae reprehenderit
            tempore vitae! Architecto, ex, magni! Ad eos, vero!
          </div>
          <div>
            Animi facilis mollitia reiciendis reprehenderit sint totam. Consequuntur cum ipsum
            officia velit voluptate. Eveniet exercitationem id non pariatur sunt tempore.
            Accusantium asperiores dolorem, earum iste magni maxime nulla sit tempora.
          </div>
          <div>
            Delectus dolorem maiores maxime nemo nesciunt odio provident sint. Animi, consequatur
            dignissimos distinctio maiores necessitatibus nisi veniam voluptas? Cupiditate eius esse
            est inventore laudantium libero nihil quis quod tempore totam?
          </div>
          <div>
            Ab accusamus adipisci architecto est nam necessitatibus nobis rerum temporibus vero
            voluptatum! A asperiores, consectetur consequuntur culpa cumque deleniti facere fugiat
            illum iste laudantium libero maxime nihil provident sed voluptas?
          </div>
          <div>
            Aspernatur consequatur eaque error et eveniet exercitationem hic impedit itaque
            laboriosam, molestias nesciunt nisi odit omnis perferendis quaerat quasi quisquam,
            ratione recusandae reiciendis rerum saepe similique voluptatum. Ad, quaerat, quod.
          </div>
          <div>
            A aliquid animi dicta, expedita fuga, laboriosam minima minus obcaecati odio, quae quia
            quisquam quod rem sapiente sequi. Eos est fuga obcaecati praesentium sapiente sed totam
            veritatis! Ipsa, natus, quae?
          </div>
          <div>
            Adipisci amet cumque eos esse fuga nostrum numquam pariatur perferendis possimus
            praesentium quaerat, quas repudiandae sed, soluta tempore! Accusantium blanditiis
            corporis cumque eaque eius eum ex expedita inventore nostrum sint?
          </div>
          <div>
            Aliquid autem delectus eius excepturi fuga harum in magnam necessitatibus nobis optio
            recusandae reprehenderit sit sunt suscipit, temporibus vero vitae voluptatem. Asperiores
            autem esse, fugit hic labore minus obcaecati. Repellat.
          </div>
        </div>
      </Layout>
    );
  }
}

export default About;
