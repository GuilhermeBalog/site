size=`gzip -c dist/index.html | wc -c`
maxsize=14600

if [ $size -gt $maxsize ]
then
  echo -n "\033[31;1m";
else
  echo -n "\033[32;1m";
fi

formatted=`numfmt --to=iec --suffix=B $size`

echo $formatted
echo -n "\033[;m"
