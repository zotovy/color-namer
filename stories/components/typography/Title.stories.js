import TypographyTitle from '~/components/typography/Title'

export default {
  title: "Components/Typography/Title",
  argTypes: {
    text: {
      control: 'text',
      defaultValue: 'Title'
    }
  }
}

export const Title = (_, { argTypes }) => ({
  components: { TypographyTitle },
  props: Object.keys(argTypes),
  template: "<typography-title>{{ text }}</typography-title>"
})
