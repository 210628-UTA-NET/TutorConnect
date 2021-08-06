using System.Collections.Generic;
using DL.Entities;

namespace API.Entities {
    public class UserDto {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public ICollection<Topic> Topics { get; set; }
        public Tutor IsTutor { get; set; }
        public virtual Location Location { get; set; }
    }
}