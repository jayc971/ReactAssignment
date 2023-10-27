using System.ComponentModel.DataAnnotations;

namespace StudentsAPI.Models
{
    public class Student
    {
        [Key]
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string contactPerson { get; set; }
        public string contactNo { get; set; }
        public string email { get; set; }
        public string dob { get; set; }
        public int age { get; set; }
        public string classroom { get; set; }
    }
}
