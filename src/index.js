import './style.css';
import { initialUi } from './modules/ui';
import { taskFactory,categoryFactory } from './modules/factory';
import { createModal } from './modules/ui';


const container = document.querySelector('main');
container.appendChild(createModal())




