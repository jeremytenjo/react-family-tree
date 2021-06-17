import React from 'react'
import styled from 'styled-components'
import Member from './member'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => `${props.level * 30}px`};
`

export default function FamilyTree({ level = 0, members = [] }) {
  const hasChildren = (member) => {
    return member.children && member.children.length
  }

  return (
    <StyledWrapper level={level}>
      {members.map((member, i) => {
        return (
          <div key={`level-${level}-${i}`}>
            <Member {...member} />

            {hasChildren(member) && (
              <FamilyTree members={member.children} level={level + 1} />
            )}
          </div>
        )
      })}
    </StyledWrapper>
  )
}
