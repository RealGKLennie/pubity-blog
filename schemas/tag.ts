import { defineType } from 'sanity'

export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  fields: [
	{
	  title: 'Name',
	  name: 'name',
	  type: 'string',
	}
  ]
}
