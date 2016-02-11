var james = {
    job: "programmer",
    married: false,
    sayJob: function(job) {
        console.log("Hi, I work as a " +[this.job]);
        
    }
};

james.sayJob();

james.job = "super programmer"
james.sayJob();

