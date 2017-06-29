using System.Collections.Generic;
using DemoBlogAppApi.Models;

namespace DemoBlogAppApi.Utils
{
    public class SeedData
    {
        public static List<Post> ValidPosts = new List<Post>
        {
            new Post
            {
                Id = 1,
                Author = "GRACE HIRT",
                Title = "Blogging for Agriculture",
                Body = "Farmers are constantly searching for new ways to make their fields produce more and be more efficient, so they pay attention to technological advances. The latest trend in agriculture involves using aerial imaging to map crops. Aerial imaging is a relatively new industry, but one that is growing rapidly due to recent advances in both drone technology and imaging equipment. Informing customers and potential customers about these advances, even if they don\'t directly relate to products you sell, can show that you are up on the latest industry news and you want to help your readers be successful. Below is a sample post that a company in the agricultural sector might use to inform farmers about the benefits of crop mapping.",
                CreationDate = "05/10/2014",
                Views = 50
            },
            new Post
            {
                Id = 2,
                Author = "John Foobar",
                Title = "Home Security Company: Create Trust",
                Body = "When you offer home security services to your customers, you are telling them that if the worst should happen, you will be there for them. You and your customers both hope your security services will never be necessary, but you also realiz...",
                CreationDate = "05/10/2015",
                Views = 44
            },
            new Post
            {
                Id = 3,
                Title = "Transporting Oversize Loads",
                CreationDate = "05/06/2014",
                Author = "Sami Khayata",
                Views = 2,
                Body = "hose that work in the trucking industry are well versed in the laws, restrictions and regulations governing them. However, many companies that depend on them are not as educated. What they do know is that they need their load delivered to..."
            },
            new Post
            {
                Id = 4,
                Title = "Warning Signs Of Depression In The Elderly",
                CreationDate = "05/12/2014",
                Author = "Ahmed Lababidi",
                Views = 122,
                Body = "Agencies that provide health care services often run advertisements in local newspapers, television and radio stations. Although these are good ways to reach some prospective clients, it may not reach the target market for elderly care whi..."
            },
            new Post
            {
                Id = 5,
                Title = "For The Dogs: An Example Post",
                CreationDate = "02/10/2017",
                Author = "John Tortoir",
                Views = 67,
                Body = "There are so many companies that cater to dogs and their owners. Small business owners have to stand out above their competitors to make dog owners buy their products instead of someone else's. So how can they do that? Starting a blog is..."
            }
        };
    }
}