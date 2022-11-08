import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { SkillsProps } from './Skills.types';

describe('Skills', () => {
  let skills:SkillsProps[]= [
    {
      "id": 1,
      "name": "Hossen",
    },
    {
      "id": 2,
      "name": "Ali",
    },
  ];
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('table')//for list,getByRole("list")
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('rowgroup') //for list,getByRole("listItem")
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
    const view=render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug(); it make a dom tree to show the original element in the component.
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 1005,
      }
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})
