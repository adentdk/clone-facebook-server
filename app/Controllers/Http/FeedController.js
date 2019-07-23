'use strict'

const Feed = use('App/Models/Feed')


class FeedController {
  async index ({ request, response, view }) {
    const feeds = await Feed.query().select('feeds.*','users.name as poster',
                                            'users.avatar as poster_avatar')
                                    .innerJoin('users','users.id','user_id')
                                    .fetch()
    return response.send({
      "message" : "feed has been loaded",
      "data" : feeds
    })
  }

  async store ({ request, response }) {
    const {}
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = FeedController
