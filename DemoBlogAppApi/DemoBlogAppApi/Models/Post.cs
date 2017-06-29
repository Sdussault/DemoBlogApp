using System;

namespace DemoBlogAppApi.Models
{
    public class Post
    {
        public long Id { get; set; }
        public string Body { get; set; }
        public string Title { get; set; }
        public string CreationDate { get; set; }
        public string Author { get; set; }
        public long Views { get; set; }
    }
}