import { AsyncPage } from '@/components';

export default () => <AsyncPage key="<%= compName %>" load={() => import('./<%= compName %>')} />;
