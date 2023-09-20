# Usage: ./get-size.sh index.html

# number of bytes available in the first 10 TCP packets
# see https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/
MAX_SIZE=14600

# compress the file passed as the first argument ($1) with gzip, that is used in servers (the -c option sets the output to the stdout, to be used in the next command), and then count (wc) the bytes (-c) of the gzip result
# count the bytes of the gziped file passed as the first argument ($1)
size=`gzip -c $1 | wc -c`

if [ $size -gt $MAX_SIZE ]
then
  # set color to red (31) bold (1)
  echo -n "\033[31;1m";
else
  # set color to green (32) bold (1)
  echo -n "\033[32;1m";
fi

# format the number of bytes in iec format (1K = 1024...)
formatted=`numfmt --to=iec --suffix=B $size`

echo $formatted

# set text style to default
echo -n "\033[;m"
