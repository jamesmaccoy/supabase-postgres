import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={393}
      height={74}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[15.375rem] w-full h-[34px]', className)}
      src="https://raw.githubusercontent.com/jamesmaccoy/supabase-postgres/refs/heads/main/src/components/Logo/thanks.svg"
    />
  )
}
