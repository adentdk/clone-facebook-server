'use strict'


const User = use('App/Models/User')
const Story = use('App/Models/Story')

class StoryController {
  async index ({ request, response, view }) {
    const user_stories = await User.query().select('*')
                                    .withCount('stories as count')
                                    .with('stories',builder => {
                                      builder.limit(1)
                                    })
                                    .fetch()
    return response.send({
      "message" : "stories has been loaded",
      "data" : user_stories
    })
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = StoryController
