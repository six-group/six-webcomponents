import styled from 'styled-components';

const TASKS = 99;

const tasks = Array.from({ length: TASKS }).map((v, i) => (
  <six-card key={`card-${i}`}>
    <h3>
      Task #{i + 1} of {TASKS}
    </h3>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid asperiores at atque commodi, dolores
    eligendi fuga hic, id iste iusto molestias, necessitatibus obcaecati optio quos ullam veniam vitae voluptatem?
  </six-card>
));

const StyledSidebar = styled('six-sidebar')`
  background: #cccccc2e;
`;

interface RightSidebarProps {
  visible: boolean;
}

const RightSidebar = ({ visible }: RightSidebarProps) => {
  return (
    <StyledSidebar slot="right-sidebar" position="right" open={visible}>
      {tasks}
    </StyledSidebar>
  );
};

export default RightSidebar;
