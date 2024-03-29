import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  author: 'John Doe',
  text: 'What is Mongo?',
  votes: 17,
}
