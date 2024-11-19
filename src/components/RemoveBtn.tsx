'use client'

import { deleteTopic } from '@/actions/topicActions'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }: { id: string }) {
  async function removeTopic() {
    const confirmed = confirm(` Are you sure to delete the topic of ${id}?`)
    if (confirmed) {
      try {
        await deleteTopic(id)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <button className="text-red-500" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  )
}
