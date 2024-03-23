import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowContainer, Popover } from 'react-tiny-popover'

import { getTranslation } from 'payload/utilities'

type Props = {
  htmlFor?: string
  label?: Record<string, string> | false | string
  required?: boolean
  labelPopover: string
  showLabelPopover: boolean
}

export const LabelPopover: React.FC<Props> = props => {
  const { label, required = false, labelPopover, showLabelPopover } = props
  const { t, i18n } = useTranslation()
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  if (label) {
    return (
      <span>
        {getTranslation(label, i18n)}
        {required && <span className="required">*</span>}
        {showLabelPopover && (
          <span style={{ marginLeft: '4px' }}>
            <Popover
              isOpen={isPopoverOpen}
              positions={['top', 'right', 'left', 'bottom']}
              padding={10}
              onClickOutside={() => setIsPopoverOpen(false)}
              content={({ position, childRect, popoverRect }) => (
                <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                  position={position}
                  childRect={childRect}
                  popoverRect={popoverRect}
                  arrowColor={'var(--color-base-800)'}
                  arrowSize={10}
                  className="popover-arrow-container"
                  arrowClassName="popover-arrow"
                >
                  <div
                    style={{
                      backgroundColor: 'var(--color-base-800)',
                      color: 'white',
                      borderRadius: '4px',
                      padding: '6px 10px',
                      maxWidth: '20rem',
                    }}
                    onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  >
                    {labelPopover}
                  </div>
                </ArrowContainer>
              )}
            >
              <span
                onMouseLeave={() => setIsPopoverOpen(!isPopoverOpen)}
                onMouseEnter={() => setIsPopoverOpen(!isPopoverOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-help"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
            </Popover>
          </span>
        )}
      </span>
    )
  }

  return null
}
