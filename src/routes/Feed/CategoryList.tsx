import React from "react"

import { useRouter } from "next/router"
import { Emoji } from "src/components/Emoji"

import styled from "@emotion/styled"

import { useCategoriesQuery } from "../../hooks/useCategoriesQuery"

type Props = {}

const CategoryList: React.FC<Props> = () => {
  const router = useRouter()
  const currentCategory = router.query.category || undefined
  const data = useCategoriesQuery()

  const handleClickCategory = (value: any) => {
    // delete
    if (currentCategory === value) {
      router.push({
        query: {
          ...router.query,
          category: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          category: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>📂</Emoji> Categories
      </div>
      <div className="list">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            data-active={key === currentCategory}
            onClick={() => handleClickCategory(key)}
          >
            {key}
          </a>
        ))}
      </div>
    </StyledWrapper>
  )
}
export default CategoryList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }
    }
  }
`
