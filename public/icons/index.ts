import Logo from "./logo.svg";
import control from "./control.svg";
import dollar from "./dollar.svg";
import secure from "./secure.svg";
import workflow from "./workflow.svg";

import accessibility from "./navBar/product/accessibility.svg";
import animation from "./navBar/product/animation.svg";
import content from "./navBar/product/content.svg";
import editor from "./navBar/product/editor.svg";
import figma from "./navBar/product/figma.svg";
import form from "./navBar/product/form.svg";
import grids from "./navBar/product/grids.svg";
import media from "./navBar/product/media.svg";
import popUp from "./navBar/product/popUp.svg";
import seo from "./navBar/product/seo.svg";
import typography from "./navBar/product/typography.svg";

import blogs from "./navBar/resources/blogs.svg";
import documentation from "./navBar/resources/documentation.svg";
import notes from "./navBar/resources/notes.svg";

import contact from "./navBar/support/contact.svg";
import feature from "./navBar/support/feature.svg";
import support_ from "./navBar/support/support.svg";

const product = {
  accessibility,
  animation,
  content,
  editor,
  figma,
  form,
  grids,
  media,
  popUp,
  seo,
  typography,
};

const resource = { blogs, documentation, notes };

const support = { contact, feature, support_ };

const navbar = { product, resource, support };

export { Logo, control, dollar, secure, workflow, navbar };
