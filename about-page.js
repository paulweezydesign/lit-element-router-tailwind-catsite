import {LitElement, css, html} from 'lit';

export class AboutPage extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    
  }

  // Render the UI as a function of component state
  render() {
    return html`
    <div class="grid grid-cols-1 items-center mt-[15%] md:mt-0 h-[100vh] w-[100vw]">
    <div class="px-4">
      <h1 class="text-7xl text-white mb-8 mr-auto ml-3 font-black">Our story,</h1>
      <p class="columns-1 md:columns-2 lg:columns-3 text-white/90 px-3 mx-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Eget nunc scelerisque viverra mauris. Amet nisl purus in mollis nunc sed. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Turpis egestas sed tempus urna et pharetra pharetra. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc consequat interdum varius sit amet. Sit amet justo donec enim diam vulputate ut pharetra sit. Enim nulla aliquet porttitor lacus luctus. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tellus cras adipiscing enim eu turpis. Nulla malesuada pellentesque elit eget gravida cum sociis. Elit ut aliquam purus sit.

Porttitor leo a diam sollicitudin tempor. Et malesuada fames ac turpis egestas integer. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Lobortis elementum nibh tellus molestie. Scelerisque purus semper eget duis at tellus at urna condimentum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Arcu bibendum at varius vel. Viverra justo nec ultrices dui sapien eget mi proin sed. At in tellus integer feugiat scelerisque varius. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Vel facilisis volutpat est velit egestas. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. In iaculis nunc sed augue. Morbi enim nunc faucibus a. Interdum velit laoreet id donec ultrices tincidunt arcu non. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Id consectetur purus ut faucibus pulvinar elementum integer enim. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Semper risus in hendrerit gravida rutrum quisque.

Massa enim nec dui nunc mattis enim ut tellus. Turpis tincidunt id aliquet risus. Faucibus ornare suspendisse sed nisi lacus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Diam maecenas sed enim ut sem. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Ut diam quam nulla porttitor massa id neque. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pharetra diam sit amet nisl suscipit adipiscing. Ut porttitor leo a diam. Viverra accumsan in nisl nisi.
      </p>
      </div>

    </div>`;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define('about-page', AboutPage);